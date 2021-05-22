import { useContext, useEffect } from "react";
import { Action } from "../CommandPalette";
import CommandPaletteContext from "../CommandPalette/CommandPaletteContext";

const BasicExample = () => {
    const { addAction, removeAction, open } = useContext(CommandPaletteContext);

    const testAction: Action = { id: 1, title: 'Open user settings' }

    useEffect(() => {
        addAction(testAction);

        return () => {
            removeAction(testAction);
        }
    }, []);

    return <>
        <p>This is a basic example of the Command Palette</p>
        <button onClick={open}>Open command palette</button>
    </>;
}

export default BasicExample;