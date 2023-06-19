import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Dropdown from './Dropdown';

describe('Tests for Dropdown component', () => {
  test('Dropdown should be visible', () => {
    const  = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
    ];
    const { getByText } = render(<Dropdown options={options} />);
    const dropdownElement = getByText('Default option');
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
