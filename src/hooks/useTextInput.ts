import { useCallback, useRef, useState } from "react";
import { INPUT_TIMEOUT_MS, T9Key, T9_KEY_MAP } from "../constants/t9";

export function useTextInput() {
  const [text, setText] = useState("");
  const [activeKey, setActiveKey] = useState<T9Key | null>(null);
  const [charCycleCount, setCharCycleCount] = useState(0);
  const [cursorPosition, setCursorPosition] = useState<number>(0);
  const timeoutRef = useRef<number | null>(null);
  const lastInsertPosition = useRef<number>(0); // Track the position of the last inserted character

  const resetTimeout = useCallback(() => {
    if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setActiveKey(null);
      setCharCycleCount(0);
      timeoutRef.current = null;
      // Do not update cursorPosition here; let it stay until a new action
    }, INPUT_TIMEOUT_MS);
  }, []);

  const insertCharacter = useCallback(
    (currentText: string, character: string, position: number) => {
      return (
        currentText.slice(0, position) + character + currentText.slice(position)
      );
    },
    []
  );

  const handleT9Input = useCallback(
    (key: T9Key) => {
      const characters = T9_KEY_MAP[key];
      const isCycling = activeKey === key && timeoutRef.current !== null;
      const charIndex = isCycling
        ? (charCycleCount + 1) % characters.length
        : 0;
      const newChar = characters[charIndex];

      setText((currentText) => {
        let newText;
        let newCursorPosition;

        if (isCycling && currentText.length > 0) {
          // Replace the character at lastInsertPosition during cycling
          const cyclePosition = lastInsertPosition.current;
          newText =
            currentText.slice(0, cyclePosition) +
            newChar +
            currentText.slice(cyclePosition + 1);
          newCursorPosition = cyclePosition + 1; // Stay after the cycled character
        } else {
          // Insert new character and move cursor immediately
          newText = insertCharacter(currentText, newChar, cursorPosition);
          newCursorPosition = cursorPosition + 1;
          lastInsertPosition.current = cursorPosition; // Update last insert position
          setCursorPosition(newCursorPosition); // Move cursor immediately
        }

        resetTimeout();
        return newText;
      });

      setCharCycleCount(charIndex);
      setActiveKey(key);
    },
    [activeKey, charCycleCount, cursorPosition, insertCharacter, resetTimeout]
  );

  const handleBackspace = useCallback(() => {
    setText((currentText) => {
      if (cursorPosition <= 0) return currentText;
      const newText =
        currentText.slice(0, cursorPosition - 1) +
        currentText.slice(cursorPosition);
      const newCursorPosition = cursorPosition - 1;
      setCursorPosition(newCursorPosition);
      lastInsertPosition.current = Math.max(0, lastInsertPosition.current - 1);
      return newText;
    });
    setActiveKey(null);
    setCharCycleCount(0);
    if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
  }, [cursorPosition]);

  const moveCursorLeft = useCallback(() => {
    setCursorPosition((prev) => Math.max(0, prev - 1));
  }, []);

  const moveCursorRight = useCallback(() => {
    setCursorPosition((prev) => Math.min(text.length, prev + 1));
  }, [text.length]);

  return {
    text,
    setText,
    handleT9Input,
    handleBackspace,
    cursorPosition,
    moveCursorLeft,
    moveCursorRight,
  };
}
