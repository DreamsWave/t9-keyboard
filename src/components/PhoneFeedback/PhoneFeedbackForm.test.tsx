import { fireEvent, screen } from "@testing-library/react";
import { render } from "../../test-utils"; // Use custom render
import PhoneFeedbackForm from "./PhoneFeedbackForm";

describe("PhoneFeedbackForm", () => {
  test("renders placeholder when empty", () => {
    render(<PhoneFeedbackForm />);
    expect(screen.getByText("Enter feedback...")).toBeInTheDocument();
  });

  test("submits form with text", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    render(<PhoneFeedbackForm />);
    fireEvent.click(screen.getByRole("button", { name: /2/i }));
    fireEvent.click(screen.getByRole("button", { name: /Send/i }));
    expect(consoleSpy).toHaveBeenCalledWith("Feedback submitted:", "a");
    consoleSpy.mockRestore();
  });
});
