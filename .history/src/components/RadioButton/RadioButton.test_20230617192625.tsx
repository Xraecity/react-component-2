import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import RadioButton from './RadioButton';

describe('Tests for Radio Button component', () => {
  test('Radio Button should be visible', () => {
    const { getByRole } = render(<RadioButton children="Test Button" />);
    const RadioButtonElement = getByRole('radio');
    expect(RadioButtonElement).toBeVisible();
  });

  test('Radio Button should change background color when disabled', () => {
    const { getByRole } = render(
      <RadioButton children="Test Button" disabled />
    );
    const RadioButtonElement = getByRole('radio');
    expect(RadioButtonElement).toHaveStyle('background-color: ');
  });
});
