import React from "react";
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

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setIsPressed(true);
      onClick();
    }
  };

  const handleKeyUp = () => {
    setIsPressed(false);
  };

  return (
    <KeypadButton
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
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
