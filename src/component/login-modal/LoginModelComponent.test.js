import React from 'react';
import { render } from '@testing-library/react';
import LoginModalComponent from './LoginModalComponent';

const noop = () => { };
it("should render the login modal and show it", () => {
  const { asFragment } = render(
    <LoginModalComponent
      show={true}
      onSignedIn={noop}
      onClose={noop} />);
  expect(asFragment()).toMatchSnapshot();
});

it("should render the login modal and not show it", () => {
  const { asFragment } = render(
    <LoginModalComponent
      show={false}
      onSignedIn={noop}
      onClose={noop} />);
  expect(asFragment()).toMatchSnapshot();
});
