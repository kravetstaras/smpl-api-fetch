/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ActionButton from '../../../components/atoms/action-button';

describe('ActionButton', () => {
  test('renders button with label and icon', () => {
    const { getByText, getByAltText } = render(
      <ActionButton
        label="Test Button"
        icon="test-icon.png"
        onClick={() => {}}
      />,
    );

    expect(getByText('Test Button')).toBeInTheDocument();
    expect(getByAltText('sort icon')).toBeInTheDocument();
  });

  test('applies custom class name', () => {
    const { container } = render(
      <ActionButton
        label="Test Button"
        icon="test-icon.png"
        onClick={() => {}}
        className="custom-class"
      />,
    );

    expect(container.firstChild).toHaveClass('custom-class');
  });

  test('handles click event', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <ActionButton
        label="Test Button"
        icon="test-icon.png"
        onClick={onClickMock}
      />,
    );

    fireEvent.click(getByText('Test Button'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('applies active styles when active prop is true', () => {
    const { container } = render(
      <ActionButton
        label="Test Button"
        icon="test-icon.png"
        onClick={() => {}}
        active
      />,
    );

    expect(container.firstChild).toHaveClass('bg-blue-300');
  });

  test('applies default styles when active prop is false', () => {
    const { container } = render(
      <ActionButton
        label="Test Button"
        icon="test-icon.png"
        onClick={() => {}}
        active={false}
      />,
    );

    expect(container.firstChild).toHaveClass('bg-white');
    expect(container.firstChild).toHaveClass('border-blue-300');
  });

  test('defaults to button type if not provided', () => {
    const { container } = render(
      <ActionButton
        label="Test Button"
        icon="test-icon.png"
        onClick={() => {}}
      />,
    );

    expect(container.firstChild).toHaveAttribute('type', 'button');
  });

  test('uses provided type', () => {
    const { container } = render(
      <ActionButton
        label="Test Button"
        icon="test-icon.png"
        onClick={() => {}}
        type="submit"
      />,
    );

    expect(container.firstChild).toHaveAttribute('type', 'submit');
  });
});
