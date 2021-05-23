import {
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import CommandPaletteContext from "./CommandPaletteContext";
import Fuse from "fuse.js";
import "./CommandPalette.scss";
import { useHotkeys } from "react-hotkeys-hook";

import { ReactComponent as ArrowRight } from "./icons/arrow-up-right.svg";

interface CommandPaletteProps {
  /**
   * Options provided by module Fuse.js.
   * Visit their [online documentation](https://fusejs.io/api/options.html) for more information.
   * */
  FuseOptions?: Fuse.IFuseOptions<Action>;

  children: React.ReactNode;

  InputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

export interface Action {
  /** The identifier for the action. This has to be supplied to remove the action later. */
  id: string | number;
  /** The type to identifying the action */
  // type: string,
  /** The name which will be displayed to the user when searching */
  title: string;
  /** A component to display before the `title` */
  leading?: React.ReactNode;
  /** Additional data which describes the action */
  data?: object;

  /** Event handler when the action has been selected */
  onSelect?: () => void;
}

const defaultFuseOptions: CommandPaletteProps["FuseOptions"] = {
  keys: ["title"],
};

export const CommandPalette = ({
  children,
  InputProps,
  FuseOptions,
}: CommandPaletteProps) => {
  const [actions, setActions] = useState<Action[]>([]);
  const [shown, setShown] = useState(false);
  const [input, setInput] = useState<string | undefined>(undefined);

  const inputRef = useRef<HTMLInputElement>(null);
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);
  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, actions.length);
  }, [actions]);

  /**
   * Adds a new action to the command palette.
   *
   * To add a dynamic action, you could combine `addAction` and `removeAction` with `useEffect`.
   * @example
   * ```typescript
   * const action = { id: 'config', name: 'Open user configuration' };
   *
   * useEffect(() => {
   *  addAction(action);
   *  return () => { removeAction(action) };
   * }, [addAction, removeAction]);
   * ```
   * */
  const addAction = useCallback((newAction: Action) => {
    return setActions((prevActions) => {
      if (prevActions.find((action) => action.id === newAction.id))
        throw Error(
          "This action already has been added. Did you forget to remove this action with removeAction beforehand?"
        );
      return [...prevActions, newAction];
    });
  }, []);

  /** Removes a certain action from the command palette */
  const removeAction = useCallback((givenAction: Action) => {
    return setActions((prevActions) =>
      prevActions.filter((action) => action.id !== givenAction.id)
    );
  }, []);

  /** Shows the command palette to the user */
  const show = () => setShown(true);

  /** Hides the command palette for the user */
  const hide = () => setShown(false);

  /** Toggles the command palette for the user */
  const toggle = () => setShown((prevShown) => !prevShown);

  // useEffect(() => {
  //     if (shown) inputRef.current?.focus();
  // }, [inputRef, shown])

  const search = (text: string) => {
    setInput(text);
  };

  const MergedFuseOptions = useMemo(
    () => ({ ...defaultFuseOptions, ...FuseOptions }),
    [FuseOptions]
  );

  const filteredActions = useMemo(() => {
    if (!input) return actions;

    console.time("fuse");
    var fuse = new Fuse<Action>(actions, MergedFuseOptions);

    const results = fuse.search(input);
    const sortedResults = results
      .sort((a, b) => (a.score ?? 0) - (b.score ?? 0))
      .map((v) => v.item);
    console.log("fuse results", results);
    console.timeEnd("fuse");
    return sortedResults;
  }, [actions, input, MergedFuseOptions]);

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    search(e.currentTarget.value);
  };

  useHotkeys(
    "escape",
    useCallback(
      (e) => {
        if (shown) hide();
      },
      [shown]
    ),
    { enableOnTags: ["INPUT"] }
  );

  useHotkeys(
    "up",
    useCallback(
      (e) => {
        if (!shown) return;

        e.preventDefault();

        const prevElem = document.activeElement
          ?.previousElementSibling as HTMLDivElement | null;

        if (!prevElem && document.activeElement === itemsRef.current?.[0])
          inputRef.current?.focus();
        else if (!prevElem)
          itemsRef.current?.[itemsRef.current?.length - 1]?.focus();
        else prevElem.focus();
      },
      [shown]
    ),
    { enableOnTags: ["INPUT"] }
  );

  useHotkeys(
    "down",
    useCallback(
      (e) => {
        if (!shown) return;

        e.preventDefault();

        const nextElem = document.activeElement
          ?.nextElementSibling as HTMLDivElement | null;

        if (!nextElem) inputRef.current?.focus();
        else if (nextElem.tabIndex === -1) itemsRef.current?.[0]?.focus();
        else nextElem.focus();
      },
      [shown]
    ),
    { enableOnTags: ["INPUT"] }
  );

  return (
    <CommandPaletteContext.Provider
      value={{ actions, addAction, removeAction, show, hide, toggle, shown }}
    >
      {children}

      {shown && (
        <>
          <div className="command-palette--overlay" onClick={hide}></div>
          <div className="command-palette">
            <header className="command-palette--header">
              <input
                type="search"
                {...InputProps}
                onInput={handleInput}
                ref={inputRef}
                autoFocus
              />
              <div className="command-palette--header--help">
                <div>
                  <kbd>↑↓</kbd> or <kbd>tab</kbd> to navigate
                </div>
                <div>
                  <kbd>enter</kbd> or <kbd>click</kbd> to select
                </div>
                <div>
                  <kbd>esc</kbd> to close
                </div>
              </div>
            </header>
            <section className="command-palette--results" tabIndex={-1}>
              {filteredActions.map((action, i) => (
                <div
                  key={action.id}
                  tabIndex={0}
                  ref={(el) => (itemsRef.current[i] = el)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") return action.onSelect?.();
                  }}
                  className="command-palette--results-result"
                  onClick={action.onSelect}
                >
                  {action.leading && <div>{action.leading}</div>}
                  <h6 className="command-palette--results-result-title">
                    {action.title}
                  </h6>
                  {/* <small>id: {action.id}</small> */}
                  <div className="trailing">
                    <ArrowRight width={18} />
                  </div>
                </div>
              ))}
            </section>
          </div>
        </>
      )}
    </CommandPaletteContext.Provider>
  );
};
