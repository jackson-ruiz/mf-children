import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("Group of test for App components", () => {
  test("should render correctly", () => {
    const { getByTestId, getByText } = render(<App />);
    // screen.debug();
    const dato = getByTestId("greeting").innerHTML;
    expect(dato.toLowerCase()).toBe("sample page");

    const datoPorTexto = getByText(/Environment/i);
    expect(datoPorTexto).toBeInTheDocument();
  });
});
