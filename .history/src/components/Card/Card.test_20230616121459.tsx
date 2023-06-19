import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Card from './Card';

describe('Tests for Card component', () => {
  test('Card should be visible', () => {
    const { getByText } = render(<Card text="Test Card" />);
    const buttonElement = getByText('Test Button');
    expect(buttonElement).toBeVisible();
  });

  test('Card should change background color when disabled', () => {
    const { getByText } = render(
      <Card text="Test Button" disabled />
    );
    const buttonElement = getByText('Test Button');
    expect(buttonElement).toHaveStyle('background-color: #cccccc');
  });
});
