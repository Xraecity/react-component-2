import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Marbella/Card",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = (args) => (
  <Card data-testId="InputField-id" {...args} />
);
Default.args = {
  disabled: false,
  title: "Default Card",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras tincidunt lobortis feugiat vivamus at. Feugiat nibh sed pulvinar proin gravida hendrerit.",
  backgroundColor: "#55bd90",
};

export const Disabled: Story = (args) => (
  <Card data-testId="InputField-id" {...args} />
);
Disabled.args = {
  disabled: true,
  title: "Disabled Card",
  text: "Disabled",
};
