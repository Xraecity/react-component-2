import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import RadioButton from './RadioButton';

describe('Tests for Radio Button component', () => {
  test('Radio Button should be visible', () => {
    const { getByText } = render(<RadioButton text ="Test Button" />);
    const RadioButtonElement = getByText('Test Button');
    expect(RadioButtonElement).toBeVisible();
  });

  test('Radio Button should change background color when disabled', () => {
    const { getByText } = render(
      <RadioButton text="Test Button" disabled />
    );
    const RadioButtonElement = getByText('Test Button');
    expect(RadioButtonElement).toHaveStyle('background-color: #cccccc');
  });
});
