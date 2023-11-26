/// <reference types="@testing-library/jest-dom" />
import { render, screen } from "@testing-library/react";
import Button from ".";

it("should render without error", () => {
  render(<Button>child</Button>);
  expect(screen.queryByRole("button")).toHaveTextContent("child");
});
