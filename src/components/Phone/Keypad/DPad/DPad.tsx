import React from "react";
import PhoneDPad from "../../../../assets/textures/phone-dpad.svg";
import {
  DPadButton,
  DPadContainer,
  DPadTexture,
  KeysContainer,
} from "./DPad.styles";

const BUTTON_CONFIG = [
  { position: "up", handler: "handleMoveUp", label: "Move cursor up" },
  { position: "right", handler: "handleMoveRight", label: "Move cursor right" },
  { position: "down", handler: "handleMoveDown", label: "Move cursor down" },
  { position: "left", handler: "handleMoveLeft", label: "Move cursor left" },
] as const;

interface DPadProps {
  handleMoveUp: () => void;
  handleMoveRight: () => void;
  handleMoveDown: () => void;
  handleMoveLeft: () => void;
}

const DPad = React.memo(
  ({
    handleMoveUp,
    handleMoveRight,
    handleMoveDown,
    handleMoveLeft,
  }: DPadProps) => {
    const handlers = {
      handleMoveUp,
      handleMoveRight,
      handleMoveDown,
      handleMoveLeft,
    };

    return (
      <DPadContainer>
        <KeysContainer>
          {BUTTON_CONFIG.map(({ position, handler, label }) => (
            <DPadButton
              key={position}
              $position={position}
              onClick={handlers[handler]}
              onKeyDown={(e) => e.key === "Enter" && handlers[handler]()}
              aria-label={label}
              tabIndex={0}
            />
          ))}
        </KeysContainer>
        <DPadTexture src={PhoneDPad} alt="Phone D-pad texture" />
      </DPadContainer>
    );
  }
);

export default DPad;
