import { useContext, useEffect } from "react";
import { Action } from "../CommandPalette";
import CommandPaletteContext from "../CommandPalette/CommandPaletteContext";
import { useHotkeys } from "react-hotkeys-hook";

const testAction: Action = { id: "back", title: "Go back" };

const KeyboardShortcutExample = () => {
  const { addAction, removeAction, toggle } = useContext(CommandPaletteContext);

  useHotkeys(
    "ctrl+p",
    (e) => {
      // Prevent default is here because CTRL + P usually starts the print dialog
      e.preventDefault();
      toggle();
    },
    {}
  );

  useEffect(() => {
    addAction(testAction);

    return () => {
      removeAction(testAction);
    };
  }, [addAction, removeAction]);

  return (
    <>
      <p>Toggle the command palette by pressing CTRL + P</p>
    </>
  );
};

export default KeyboardShortcutExample;
