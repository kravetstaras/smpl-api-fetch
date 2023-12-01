/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Header from '../../../components/molecules/header';

const mockStore = configureStore();
const initialState = {
  view: 'list',
  search: '',
};
const store = mockStore(initialState);

describe('Header component', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText, getAllByRole } = render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );

    const searchInput = getByPlaceholderText('Search');
    //@ts-ignore
    const buttons = getAllByRole('button', { type: 'button' });

    expect(searchInput).toBeInTheDocument();
    expect(buttons).toHaveLength(2);
  });
});
