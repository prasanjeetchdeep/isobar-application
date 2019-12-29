import React from "react";
import { render } from "@testing-library/react";
import HeaderBlockComponent from "./HeaderBlockComponent";

const noop = () => {};
const cart = [1];
const books = [
    {
      id: 1,
      name: "React - basics",
      description: "This course is going to take you through basics of React.",
      author: "James White",
      publishDate: "12/03/2019",
      duration: "00:03:56",
      image: "https://cdn.auth0.com/blog/react-js/react.png"
    }
  ];
  

it("should render HeaderBlockComoponent with 1 item in cart", () => {
  const { asFragment } = render(
    <HeaderBlockComponent
      onSignInClick={noop}
      onSignOutClick={noop}
      onSearch={noop}
      signedIn={true}
      cart={cart}
      books={books}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

it("should render HeaderBlockComoponent with 1 item in cart without being signedin", () => {
    const { asFragment } = render(
      <HeaderBlockComponent
        onSignInClick={noop}
        onSignOutClick={noop}
        onSearch={noop}
        signedIn={false}
        cart={cart}
        books={books}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
