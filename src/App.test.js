import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders nina vessel heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/nina vessel/i);
  expect(headingElement).toBeInTheDocument();
});
