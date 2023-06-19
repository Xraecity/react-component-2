import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Dropdown from './Dropdown';

describe('Tests for Dropdown component', () => {
  test('Dropdown should be visible', () => {

    const { getByText } = render(<Dropdown options={['Option 1', 'Option 2', 'Option 3']} />);
    const dropdownElement = getByText('Default Option'); // Replace with your default option text
    expect(dropdownElement).toBeVisible();
  });

  test('Dropdown should change background color when disabled', () => {
    const options = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
    ];
    const { getByTestId } = render(<Dropdown options={options} />);
    const dropdownElement = getByTestId('Dropdown-id');
    expect(dropdownElement).toHaveStyle('background-color: #cccccc');
  });
});
