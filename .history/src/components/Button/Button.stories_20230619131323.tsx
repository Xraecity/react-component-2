import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Marbella/Button",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Default.args = {
  disabled: false,
  label: "Primary",
  backgroundColor: "#55bd90",
};

export const Disabled: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Disabled.args = {
  disabled: true,
  label: "Disabled",
};

export const Small: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Small.args = {
  disabled: false,
  size: "small",
  label: "Small",
};

export const Medium: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Medium.args = {
  disabled: false,
  size: "medium",
  label: "Medium",
};

export const Large: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Large.args = {
  disabled: false,
  size: "large",
  label: "Large",
};
