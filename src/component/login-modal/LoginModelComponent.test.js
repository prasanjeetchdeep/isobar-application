import React from 'react';
import { render } from '@testing-library/react';
import LoginModalComponent from './LoginModalComponent';

it("renders", () => {
    const { asFragment } = render(<LoginModalComponent show={true}/>);
    expect(asFragment()).toMatchSnapshot();
  });
