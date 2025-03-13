import React from "react";
import { useButtonSound } from "../../../../hooks/useButtonSound";
import { KeyType } from "../../../../types/keypad";
import { Chars } from "./Key.styles";
import { KeypadButton } from "./KeypadButton";

interface KeyProps {
  type: KeyType;
  chars?: string;
  onClick: () => void;
  noPadding?: boolean;
  children: React.ReactNode;
}

function Key({ type, chars, onClick, noPadding = false, children }: KeyProps) {
  const [isPressed, setIsPressed] = React.useState(false);
  const { playSound } = useButtonSound();

  const handleMouseDown = () => {
    setIsPressed(true);
    playSound(true);
  };

  const handleMouseUp = () => {
    if (isPressed) {
      setIsPressed(false);
      playSound(false);
    }
  };

  const handleMouseLeave = () => {
    setIsPressed(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setIsPressed(true);
      playSound(true);
      onClick();
    }
  };

  const handleKeyUp = () => {
    if (isPressed) {
      setIsPressed(false);
      playSound(false);
    }
  };

  return (
    <KeypadButton
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      tabIndex={0}
      aria-label={chars ? `${children} (${chars})` : String(children)}
      noPadding={noPadding}
      isControl={type === "control"}
      pressed={isPressed}
    >
      {children}
      {chars && <Chars>{chars}</Chars>}
    </KeypadButton>
  );
}

export default Key;
