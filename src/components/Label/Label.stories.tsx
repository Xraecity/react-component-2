import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Label from "./Label";

const meta: Meta<typeof Label> = {
  component: Label,
  title: "Marbella/Label",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = (args) => (
  <Label data-testId="InputField-id" {...args} />
);
Default.args = {
  disabled: false,
  text: "Label",
  backgroundColor: "#55bd90",

};


export const Disabled: Story = (args) => (
  <Label data-testId="InputField-id" {...args} />
);
Disabled.args = {
  disabled: true,
  text: "Disabled",
};

