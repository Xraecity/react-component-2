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
  text: "Card Details",
  backgroundColor: "#55bd90",

};


export const Disabled: Story = (args) => (
  <Card data-testId="InputField-id" {...args} />
);
Disabled.args = {
  disabled: true,
  text: "Disabled",
};

