import { createContext } from "react";
import { Action } from "./CommandPalette";

export interface ICommandPaletteContext {
  actions: Action[];
  addAction(action: Action): void;
  removeAction(action: Action): void;
  show(): void;
  hide(): void;
  toggle(): void;
  shown: boolean;
}

function noop() {}

const CommandPaletteContext = createContext<ICommandPaletteContext>({
  actions: [],
  addAction: noop,
  removeAction: noop,
  show: noop,
  hide: noop,
  toggle: noop,
  shown: false,
});
export default CommandPaletteContext;
