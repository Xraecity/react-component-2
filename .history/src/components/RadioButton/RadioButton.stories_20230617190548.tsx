import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./RadioButton";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Marbella/RadioButton",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Default.args = {
  disabled: false,
  text: "Primary",
  backgroundColor: "#55bd90",

};


export const Disabled: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Disabled.args = {
  disabled: true,
  text: "Disabled",
};