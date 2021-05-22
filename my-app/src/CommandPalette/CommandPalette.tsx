import { useState } from "react";
import CommandPaletteContext from "./CommandPaletteContext"
import Fuse from 'fuse.js'
import './CommandPalette.css'

interface CommandPaletteProps {
    children: React.ReactNode
    /**
     * Options provided by module Fuse.js.
     * Visit their [online documentation](https://fusejs.io/api/options.html) for more information.
     * */
    FuseOptions?: Fuse.IFuseOptions<Action>
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

export const CommandPalette = ({ children, FuseOptions }: CommandPaletteProps) => {
    const [actions, setActions] = useState<Action[]>([]);
    const [isOpen, setOpen] = useState(false);

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
        if (actions.find((action) => action.id === newAction.id)) throw Error('This action already has been added. Did you forget to remove this action with removeAction beforehand?')

        return setActions(prevActions => [...prevActions, newAction])
    }

    /** Removes a certain action from the command palette */
    const removeAction = (givenAction: Action) => {
        return setActions(prevActions => prevActions.filter((action) => action.id !== givenAction.id))
    }

    /** Shows the command palette to the user */
    const show = () => setOpen(true);

    /** Hides the command palette for the user */
    const hide = () => setOpen(false);


    const search = (text: string) => {
        var fuse = new Fuse<Action>(actions, FuseOptions);
    }

    return (
        <CommandPaletteContext.Provider value={
            { actions, addAction, removeAction, open: show }
        }>
            {children}

            {/* The actual command palette */}
            {isOpen && <div className="command-palette">
                <input />
                <section className="command-palette--results">
                    {actions.map((action) => <div key={action.id} className="command-palette--results-result">
                        <div>{action.leading}</div>
                        <h6>title: {action.title}</h6>
                        <small>id: {action.id}</small>
                    </div>)}
                </section>
            </div>}
        </CommandPaletteContext.Provider>
    );
}
