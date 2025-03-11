import { act, renderHook } from "@testing-library/react";
import { useTextInput } from "./useTextInput";

describe("useTextInput", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  test("cycles characters on rapid repeated key press", () => {
    const { result } = renderHook(() => useTextInput());

    act(() => {
      result.current.handleT9Input("2"); // "a"
    });

    act(() => {
      result.current.handleT9Input("2"); // "b"
    });

    act(() => {
      result.current.handleT9Input("2"); // "c"
    });

    expect(result.current.text).toBe("c"); // Should cycle, not append
    expect(result.current.cursorPosition).toBe(1); // Cursor stays at end

    act(() => {
      jest.advanceTimersByTime(1000); // Wait for timeout
    });
    expect(result.current.cursorPosition).toBe(1); // Cursor stays after timeout
  });
});
