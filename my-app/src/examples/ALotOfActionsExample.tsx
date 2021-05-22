import { useContext, useEffect } from "react";
import { LoremIpsum } from "lorem-ipsum";
import { Action } from "../CommandPalette";
import CommandPaletteContext from "../CommandPalette/CommandPaletteContext";

const ALotOfActionsExample = () => {
    const { addAction, removeAction } = useContext(CommandPaletteContext);

    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 8,
            min: 4
        },
        wordsPerSentence: {
            max: 16,
            min: 4
        }
    });


    const testActions: Action[] = Array.from({ length: 50 }, (_, i) => ({
        id: i + '5',
        title: lorem.generateSentences(1)
    }))

    useEffect(() => {
        testActions.forEach((testAction) => addAction(testAction));

        return () => {
            testActions.forEach((testAction) => removeAction(testAction));
        }
    }, []);

    return <>
        <p>TODO: Open the command palette by pressing CTRL + P</p>
    </>;
}

export default ALotOfActionsExample;