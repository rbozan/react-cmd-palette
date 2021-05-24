import React, { useContext, useEffect } from "react";
import { Story, Meta } from "@storybook/react";

import { Action, CommandPalette, CommandPaletteProps } from "../CommandPalette";
import CommandPaletteContext from "../CommandPalette/CommandPaletteContext";

import "./page.css";
import { LoremIpsum } from "lorem-ipsum";

export default {
  title: "CommandPalette",
  component: CommandPalette,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as Meta;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const testActions: Action[] = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  title: lorem.generateSentences(1),
  onSelect: () => {
    alert("You selected action #" + i);
  },
}));

const Template: Story<CommandPaletteProps> = (args) => (
  <CommandPalette {...args}>
    Render your children within the
    <code>{"<CommandPalette />"}</code>
    to access the context. <ToggleCommandPaletteButton />
    <ComponentWhichRegistersActions />
  </CommandPalette>
);

const ToggleCommandPaletteButton = () => {
  const { toggle } = useContext(CommandPaletteContext);

  return <button onClick={toggle}>Toggle open the command palette</button>;
};

const ComponentWhichRegistersActions = () => {
  const { addAction, removeAction } = useContext(CommandPaletteContext);

  useEffect(() => {
    testActions.forEach((action) => addAction(action));

    return () => {
      testActions.forEach((action) => removeAction(action));
    };
  }, [addAction, removeAction]);

  return null;
};

export const Default = Template.bind({});
Default.args = {
  InputProps: { placeholder: "What do you want to search?" },
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  InputProps: {
    placeholder: "Imagine if you couldn't search through all this... 😌",
  },
};
