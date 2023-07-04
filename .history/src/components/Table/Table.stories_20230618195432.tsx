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
    { cells: ["Data1", "Row 1 Cell 2", "Row 1 Cell 3"] },
    { cells: ["Row 2 Cell 1", "Row 2 Cell 2", "Row 2 Cell 3"] },
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
