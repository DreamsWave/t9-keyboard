import { useReducer, useRef } from "react";
import { INPUT_TIMEOUT_MS, T9Key, T9_KEY_MAP } from "../constants/t9";

interface State {
  text: string[];
  cursorPosition: number;
  lastInsertPosition: number;
  activeKey: T9Key | null;
  charCycleCount: number;
}

type Action =
  | { type: "INSERT"; char: string; key: T9Key; charIndex: number }
  | { type: "BACKSPACE" }
  | { type: "MOVE_LEFT" }
  | { type: "MOVE_RIGHT" }
  | { type: "RESET_TIMEOUT" }
  | { type: "SET_TEXT"; text: string }
  | { type: "SET_CURSOR_POSITION"; cursorPosition: number };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INSERT": {
      const isCycling =
        state.activeKey === action.key &&
        state.cursorPosition === state.lastInsertPosition + 1;
      if (isCycling && state.text.length > 0) {
        const newText = [...state.text];
        newText[state.lastInsertPosition] = action.char;
        return {
          ...state,
          text: newText,
          activeKey: action.key,
          charCycleCount: action.charIndex,
        };
      }
      const newText = [
        ...state.text.slice(0, state.cursorPosition),
        action.char,
        ...state.text.slice(state.cursorPosition),
      ];
      return {
        ...state,
        text: newText,
        cursorPosition: state.cursorPosition + 1,
        lastInsertPosition: state.cursorPosition,
        activeKey: action.key,
        charCycleCount: action.charIndex,
      };
    }
    case "BACKSPACE":
      if (state.cursorPosition <= 0) return state;
      return {
        ...state,
        text: [
          ...state.text.slice(0, state.cursorPosition - 1),
          ...state.text.slice(state.cursorPosition),
        ],
        cursorPosition: state.cursorPosition - 1,
        lastInsertPosition: Math.max(0, state.lastInsertPosition - 1),
        activeKey: null,
        charCycleCount: 0,
      };
    case "MOVE_LEFT":
      return {
        ...state,
        cursorPosition: Math.max(0, state.cursorPosition - 1),
      };
    case "MOVE_RIGHT":
      return {
        ...state,
        cursorPosition: Math.min(state.text.length, state.cursorPosition + 1),
      };
    case "RESET_TIMEOUT":
      return { ...state, activeKey: null, charCycleCount: 0 };
    case "SET_TEXT":
      return {
        ...state,
        text: action.text.split(""),
        cursorPosition: action.text.length,
        lastInsertPosition: 0,
        activeKey: null,
        charCycleCount: 0,
      };
    case "SET_CURSOR_POSITION":
      return {
        ...state,
        cursorPosition: Math.max(
          0,
          Math.min(state.text.length, action.cursorPosition)
        ),
      };
    default:
      return state;
  }
};

export function useTextInput(keyMap: Record<T9Key, string[]> = T9_KEY_MAP) {
  const [state, dispatch] = useReducer(reducer, {
    text: [],
    cursorPosition: 0,
    lastInsertPosition: 0,
    activeKey: null,
    charCycleCount: 0,
  });
  const timeoutRef = useRef<number | null>(null);

  const clearTimeoutRef = (callback?: () => void, delay?: number) => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (callback && delay) {
      timeoutRef.current = window.setTimeout(() => {
        callback();
        timeoutRef.current = null;
      }, delay);
    }
  };

  const handleT9Input = (key: T9Key) => {
    const characters = keyMap[key];
    const isCycling =
      state.activeKey === key &&
      state.cursorPosition === state.lastInsertPosition + 1;
    const charIndex = isCycling
      ? (state.charCycleCount + 1) % characters.length
      : 0;
    const newChar = characters[charIndex];

    dispatch({ type: "INSERT", char: newChar, key, charIndex });
    clearTimeoutRef(
      () => dispatch({ type: "RESET_TIMEOUT" }),
      INPUT_TIMEOUT_MS
    );
  };

  return {
    text: state.text.join(""),
    setText: (text: string) => dispatch({ type: "SET_TEXT", text }),
    handleT9Input,
    handleBackspace: () => dispatch({ type: "BACKSPACE" }),
    cursorPosition: state.cursorPosition,
    setCursorPosition: (cursorPosition: number) =>
      dispatch({ type: "SET_CURSOR_POSITION", cursorPosition }),
    moveCursorLeft: () => dispatch({ type: "MOVE_LEFT" }),
    moveCursorRight: () => dispatch({ type: "MOVE_RIGHT" }),
  };
}
