import { useContext, useEffect } from "react";
import { Action } from "../CommandPalette";
import CommandPaletteContext from "../CommandPalette/CommandPaletteContext";
import { useHotkeys } from "react-hotkeys-hook";

const KeyboardShortcutExample = () => {
    const { addAction, removeAction, toggle, shown } = useContext(CommandPaletteContext);

    useHotkeys('ctrl+p', (e) => {
        // Prevent default is here because CTRL + P usually starts the print dialog
        e.preventDefault();
        toggle();
    }, {});


    const testAction: Action = { id: 'back', title: 'Go back' }

    useEffect(() => {
        addAction(testAction);

        return () => {
            removeAction(testAction);
        }
    }, []);

    return <>
        <p>Open the command palette by pressing CTRL + P</p>
    </>;
}

export default KeyboardShortcutExample;