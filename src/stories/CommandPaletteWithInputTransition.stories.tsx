import React, { useContext, useEffect } from "react";
import { Story, Meta } from "@storybook/react";

import { Action, CommandPalette, CommandPaletteProps } from "../CommandPalette";
import CommandPaletteContext from "../CommandPalette/CommandPaletteContext";

import "./page.css";
import { LoremIpsum } from "lorem-ipsum";
import { useHotkeys } from "react-hotkeys-hook";
import { AnimateSharedLayout, motion } from "framer-motion";

export default {
  title: "CommandPalette/Basics/InputTransition",
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
  <AnimateSharedLayout type="crossfade">
    <CommandPalette {...args}>
      <p>This input down below creates an animation when pressed.</p>
      <p>
        It could be used anywhere in your application, for example: as a search
        bar in the header
      </p>
      <InputWithTransition />

      <p>
        It uses Framer Motion for the animation, so you would have to add Framer
        Motion to your application as well.
      </p>
      <ComponentWhichRegistersActions />
    </CommandPalette>
  </AnimateSharedLayout>
);

const InputWithTransition = () => {
  const { show } = useContext(CommandPaletteContext);

  return (
    <motion.input
      layoutId="cp__input"
      type="search"
      placeholder="What are you searching for?"
      onFocus={show}
    />
  );
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

export const InputTransition = Template.bind({});
InputTransition.args = {};
