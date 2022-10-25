import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("Group of test for App components", () => {
  test("should render correctly", () => {
    const { getByTestId } = render(<App />);
    // screen.debug();
    const dato = getByTestId("greeting").innerHTML;
    // console.log(`dato: ${dato}`);
    expect(dato.toLowerCase()).toBe("sample page");
  });
});
