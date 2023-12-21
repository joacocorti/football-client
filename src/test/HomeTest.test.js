import React from "react";
import { render } from "@testing-library/react-native";
import Home from "../screens/home/index";

describe("Home Screen", () => {
  it("should render correctly", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Football Info")).toBeTruthy();
  });
});
