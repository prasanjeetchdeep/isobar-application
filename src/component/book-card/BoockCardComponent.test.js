import React from "react";
import { render } from "@testing-library/react";
import BookCardComponent from "./BookCardComponent";

const book = [
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
  const noop = () => {};

it("should render the Book Card if the book is added in the cart", () => {
    const { asFragment } = render(
    <BookCardComponent
    book={book}
    isAddedtoCart={true}
    onButtonClick={noop}
     />
    );
    expect(asFragment()).toMatchSnapshot();
});

it("should render the Book Card if the book is not added in the cart", () => {
    const { asFragment } = render(
    <BookCardComponent
    book={book}
    isAddedtoCart={false}
    onButtonClick={noop}
     />
    );
    expect(asFragment()).toMatchSnapshot();
});