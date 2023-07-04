import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import RadioButton from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  component: RadioButton,
  title: "Marbella/RadioButton",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = (args) => (
  <RadioButton data-testId="InputField-id" {...args} />
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
