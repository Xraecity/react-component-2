import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Image from "./Image";

const meta: Meta<typeof Image> = {
  component: Image,
  title: "Marbella/Image",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = (args) => (
  <Image data-testId="InputField-id" {...args} />
);
Default.args = {
  imageUrl: "https://tse3.mm.bing.net/th?id=OIP.c4MCiDFgSGLsR_7-4-j0PwHaEK&pid=Api&P=0&h=180",
  altText: "Example Image",
  disabled: false,
  backgroundColor: "#55bd90",

};


export const Disabled: Story = (args) => (
  <Image data-testId="InputField-id" {...args} />
);
Disabled.args = {
  imageUrl: "https://tse3.mm.bing.net/th?id=OIP.c4MCiDFgSGLsR_7-4-j0PwHaEK&pid=Api&P=0&h=180",
  altText: "Example Image",
  disabled: true,
};
