import React from "react";
import { render } from "@testing-library/react";
import ItemListPage from "./ItemListPage";


it("should render the Item List Page", () => {
    const { asFragment } = render(<ItemListPage />);
    expect(asFragment()).toMatchSnapshot();
});