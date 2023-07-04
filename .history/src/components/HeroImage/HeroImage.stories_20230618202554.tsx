import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import HeroImage from "./HeroImage";

const meta: Meta<typeof HeroImage> = {
  component: HeroImage,
  title: "Marbella/HeroImage",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = (args) => (
  <HeroImage data-testId="InputField-id" {...args} />
);
Default.args = {
  imageUrl: "image2.jpg",
  altText: "Example Image",
  disabled: false,
  backgroundColor: "#55bd90",
};

export const Disabled: Story = (args) => (
  <HeroImage data-testId="InputField-id" {...args} />
);
Disabled.args = {
  imageUrl: "image2.jpg",
  altText: "Example Image",
  disabled: true,
};
