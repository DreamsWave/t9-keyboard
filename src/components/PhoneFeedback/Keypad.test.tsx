import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../test-utils"; // Use custom render
import Keypad from "./Keypad";

describe("Keypad", () => {
  const mockProps = {
    onKeyPress: jest.fn(),
    onBackspace: jest.fn(),
    onSubmit: jest.fn(),
    onMoveLeft: jest.fn(),
    onMoveRight: jest.fn(),
  };

  test("renders all keys", () => {
    render(<Keypad {...mockProps} />);
    expect(screen.getByRole("button", { name: /1/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Send/i })).toBeInTheDocument();
  });

  test("calls onKeyPress when key 2 is clicked", () => {
    render(<Keypad {...mockProps} />);
    fireEvent.click(screen.getByRole("button", { name: /2/i }));
    expect(mockProps.onKeyPress).toHaveBeenCalledWith("2");
  });

  test("is accessible via keyboard", () => {
    render(<Keypad {...mockProps} />);
    const key2 = screen.getByRole("button", { name: /2/i });
    key2.focus();
    fireEvent.keyDown(key2, { key: "Enter" });
    expect(mockProps.onKeyPress).toHaveBeenCalledWith("2");
  });
});
