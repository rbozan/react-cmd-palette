import { FormEvent, useMemo, useState } from "react";
import CommandPaletteContext from "./CommandPaletteContext"
import Fuse from 'fuse.js'
import './CommandPalette.css'

interface CommandPaletteProps {
    /**
     * Options provided by module Fuse.js.
     * Visit their [online documentation](https://fusejs.io/api/options.html) for more information.
     * */
    FuseOptions?: Fuse.IFuseOptions<Action>

    children: React.ReactNode

    InputProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
}

export interface Action {
    /** The identifier for the action. This has to be supplied to remove the action later. */
    id: string | number,
    /** The type to identifying the action */
    // type: string,
    /** The name which will be displayed to the user when searching */
    title: string,
    /** A component to display before the `title` */
    leading?: React.ReactNode,
    /** Additional data which describes the action */
    data?: object,

}

export const CommandPalette = ({ children, InputProps, FuseOptions }: CommandPaletteProps) => {
    const [actions, setActions] = useState<Action[]>([]);
    const [shown, setShown] = useState(false);
    const [input, setInput] = useState<string | undefined>(undefined);

    const defaultFuseOptions: typeof FuseOptions = {
        keys: ['title'],
    };

    /**
     * Adds a new action to the command palette.
     * 
     * To add a dynamic action, you could combine `addAction` and `removeAction` with `useEffect`.
     * @example
     * ```typescript
     * useEffect(() => {
     *  addAction({ id: 'config', name: 'Open user configuration' })
     *  return () => { removeAction({ id: 'config' }) }
     * })
     * ```
     * */
    const addAction = (newAction: Action) => {

        return setActions(prevActions => {
            if (prevActions.find((action) => action.id === newAction.id)) throw Error('This action already has been added. Did you forget to remove this action with removeAction beforehand?')
            return [...prevActions, newAction]
        })
    }

    /** Removes a certain action from the command palette */
    const removeAction = (givenAction: Action) => {
        return setActions(prevActions => prevActions.filter((action) => action.id !== givenAction.id))
    }

    /** Shows the command palette to the user */
    const show = () => setShown(true);

    /** Hides the command palette for the user */
    const hide = () => setShown(false);

    /** Toggles the command palette for the user */
    const toggle = () => setShown((prevShown) => !prevShown);


    const search = (text: string) => {
        setInput(text);

    }

    const FuseOptions2 = useMemo(() => ({ ...defaultFuseOptions, ...FuseOptions }), [defaultFuseOptions, FuseOptions])

    const filteredActions = useMemo(() => {
        if (!input) return actions;
        var fuse = new Fuse<Action>(actions, FuseOptions2);

        const results = fuse.search(input);
        console.log('fuse results', fuse.search(input));
        return results.sort((a, b) => (a.score ?? 0) - (b.score ?? 0)).map(v => v.item)
    }, [actions, input, FuseOptions2])

    const handleInput = (e: FormEvent<HTMLInputElement>) => {
        search(e.currentTarget.value);
    }

    return (
        <CommandPaletteContext.Provider value={
            { actions, addAction, removeAction, show, hide, toggle, shown }
        }>
            {children}

            {/* The actual command palette */}
            {shown && <div className="command-palette">
                <input {...InputProps} onInput={handleInput} />
                <section className="command-palette--results">
                    {filteredActions.map((action) => <div key={action.id} className="command-palette--results-result">
                        <div>{action.leading}</div>
                        <h6 className="command-palette--results-result-title">{action.title}</h6>
                        <small>id: {action.id}</small>
                    </div>)}
                </section>
            </div>}
        </CommandPaletteContext.Provider>
    );
}
