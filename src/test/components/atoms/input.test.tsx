/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import Input from '../../../components/atoms/input';

describe('Input component', () => {
  it('renders without crashing', () => {
    render(<Input />);
  });

  it('renders with label', () => {
    const { getByPlaceholderText } = render(<Input label="Username" />);
    const inputElement = getByPlaceholderText('Username');
    expect(inputElement).toBeInTheDocument();
  });
});
