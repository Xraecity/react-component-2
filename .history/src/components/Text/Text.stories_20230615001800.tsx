import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "Marbella/Text",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = (args) => (
  <Text data-testId="InputField-id" {...args} />
);
Default.args = {
  disabled: false,
  text: "Default Text",
};

export const Customized: Story = (args) => (
  <Text data-testId="InputField-id" {...args} />
);
Customized.args = {
  disabled: false,
  text: "Customized text",
};

export const Disabled: Story = (args) => (
  <Text data-testId="InputField-id" {...args} />
);
Disabled.args = {
  disabled: true,
  text: "Disabled",
};

export const Small: Story = (args) => (
  <Text data-testId="InputField-id" {...args} />
);
Small.args = {
  disabled: false,
  size: "small",
  text: "Small",
};

export const Medium: Story = (args) => (
  <Text data-testId="InputField-id" {...args} />
);
Medium.args = {
  disabled: false,
  size: "medium",
  text: "Medium",
};

export const Large: Story = (args) => (
  <Text data-testId="InputField-id" {...args} />
);
Large.args = {
  disabled: false,
  size: "large",
  text: "Large",
};
