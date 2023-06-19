import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";

const meta: Meta<typeof Table> = {
  component: Table,
  title: "Marbella/Table",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = (args) => (
  <Table data-testId="InputField-id" {...args} />
);
Default.args = {
  header: "Default Header",
  rows: [
    { cells: ["TestData", "TestData", "TestData"] },
    { cells: ["TestData", "TestData", "TestData"] },
  ],
  footer: " Default Footer",
  disabled: false,
  backgroundColor: "#55bd90",
};


export const Disabled: Story = (args) => (
  <Table data-testId="InputField-id" {...args} />
);
Disabled.args = {
  ...Default.args,
  disabled: true,
};

