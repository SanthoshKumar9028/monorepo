/// <reference types="@testing-library/jest-dom" />
import { render, screen } from "@testing-library/react";
import Container from ".";

it("should render without error", () => {
  render(<Container>child</Container>);
  expect(screen.queryByText("child")).toBeInTheDocument();
});
