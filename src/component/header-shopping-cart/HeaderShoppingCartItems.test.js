import React from 'react';
import { render } from '@testing-library/react';
import HeaderShoppingCartItems from './HeaderShoppingCartItems';

const book= {
    id: 3,
    name: "CSS Animations",
    description: "Learn how to animate anything in CSS",
    author: "Alan Smith",
    publishDate: "04/12/2018",
    duration: "00:02:11",
    image:
      "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"
  };

it("renders the above book at index 1", () => {
    const { asFragment } = render(<HeaderShoppingCartItems book={book} index={1}/>);
    expect(asFragment()).toMatchSnapshot();
  });
