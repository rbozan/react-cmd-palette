import { createContext } from "react";
import { Action } from "./CommandPalette";

export interface ICommandPaletteContext {
    actions: Action[];
    addAction(action: Action): void;
    removeAction(action: Action): void;
    open(): void;
}

function noop() { }

const CommandPaletteContext = createContext<ICommandPaletteContext>({
    actions: [],
    addAction: noop,
    removeAction: noop,
    open: noop
});
export default CommandPaletteContext;