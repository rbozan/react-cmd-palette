import React, { useContext, useEffect } from "react";
import { Story, Meta } from "@storybook/react";

import { CommandPalette, CommandPaletteProps } from "../CommandPalette";
import CommandPaletteContext from "../CommandPalette/CommandPaletteContext";

import "./page.css";

export default {
  title: "CommandPalette",
  component: CommandPalette,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as Meta;

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
    addAction({ id: "1", title: "Test" });

    return () => {
      removeAction({ id: "1", title: "Test" });
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
  InputProps: { placeholder: "What do you want to search?" },
};
