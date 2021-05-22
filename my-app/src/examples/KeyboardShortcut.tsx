import { useContext, useEffect } from "react";
import { Action } from "../CommandPalette";
import CommandPaletteContext from "../CommandPalette/CommandPaletteContext";

const KeyboardShortcutExample = () => {
    const { addAction, removeAction, open } = useContext(CommandPaletteContext);

    const testAction: Action = { id: 'back', title: 'Go back' }

    useEffect(() => {
        addAction(testAction);

        return () => {
            removeAction(testAction);
        }
    }, []);

    return <>
        <p>TODO: Open the command palette by pressing CTRL + P</p>
    </>;
}

export default KeyboardShortcutExample;