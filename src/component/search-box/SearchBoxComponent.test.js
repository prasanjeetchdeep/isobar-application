import React from 'react';
import { render } from '@testing-library/react';
import SearchBoxComponent from './SearchBoxComponent';

const noop = () => { };
it("should render the seaarch box component", () => {
  const { asFragment } = render(
    <SearchBoxComponent
      onSearch={noop} />);
  expect(asFragment()).toMatchSnapshot();
});
