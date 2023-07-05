import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: 'Marbella/Dropdown',
  argTypes: {},
};

export default meta;

type DropdownStory = StoryObj<typeof Dropdown>;

export const Default: DropdownStory = (args) => (
  <Dropdown data-testId="Dropdown-id" {...args} />
);

Default.args = {
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  defaultValue: 'option1',
  backgroundColor: '#55bd90',
  disabled: false,
};

export const Disabled: DropdownStory = (args) => (
  <Dropdown data-testId="Dropdown-id" {...args} />
);

Disabled.args = {
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  defaultValue: 'option1',
  disabled: true,
};
