import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Dropdown from './Dropdown';

describe('Tests for Dropdown component', () => {

  test('Dropdown should be visible', () => {
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ];
    const { getByText } = render(<Dropdown options={options} />);
    const dropdownElement = getByText('Option 1');
    expect(dropdownElement).toBeVisible();
  });

  test('Dropdown should change background color when disabled', () => {
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
    ];

    const { getByTestId } = render(<Dropdown options={options} disabled />);
    const dropdown = getByTestId('dropdown');

    expect(dropdown).toHaveStyle('background-color: #cccccc');
  });

});
