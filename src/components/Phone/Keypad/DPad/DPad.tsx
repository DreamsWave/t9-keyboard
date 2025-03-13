import React from "react";
import PhoneDPadPressedBottom from "../../../../assets/textures/phone-dpad/phone-dpad-pressed-bottom.svg";
import PhoneDPadPressedLeft from "../../../../assets/textures/phone-dpad/phone-dpad-pressed-left.svg";
import PhoneDPadPressedRight from "../../../../assets/textures/phone-dpad/phone-dpad-pressed-right.svg";
import PhoneDPadPressedUp from "../../../../assets/textures/phone-dpad/phone-dpad-pressed-up.svg";
import PhoneDPad from "../../../../assets/textures/phone-dpad/phone-dpad.svg";
import {
  DPadButton,
  DPadContainer,
  DPadTexture,
  KeysContainer,
} from "./DPad.styles";

const BUTTON_CONFIG = [
  {
    position: "up",
    handler: "handleMoveUp",
    label: "Move cursor up",
    texture: PhoneDPadPressedUp,
  },
  {
    position: "right",
    handler: "handleMoveRight",
    label: "Move cursor right",
    texture: PhoneDPadPressedRight,
  },
  {
    position: "down",
    handler: "handleMoveDown",
    label: "Move cursor down",
    texture: PhoneDPadPressedBottom,
  },
  {
    position: "left",
    handler: "handleMoveLeft",
    label: "Move cursor left",
    texture: PhoneDPadPressedLeft,
  },
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
    const [currentTexture, setCurrentTexture] =
      React.useState<string>(PhoneDPad);

    const handlers = {
      handleMoveUp,
      handleMoveRight,
      handleMoveDown,
      handleMoveLeft,
    };

    const handleMouseDown = (texture: string) => {
      setCurrentTexture(texture);
    };

    const handleMouseUp = () => {
      setCurrentTexture(PhoneDPad);
    };

    return (
      <DPadContainer>
        <KeysContainer>
          {BUTTON_CONFIG.map(({ position, handler, label, texture }) => (
            <DPadButton
              key={position}
              $position={position}
              onClick={handlers[handler]}
              onMouseDown={() => handleMouseDown(texture)}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handlers[handler]();
                  handleMouseDown(texture);
                }
              }}
              onKeyUp={() => handleMouseUp()}
              aria-label={label}
              tabIndex={0}
            />
          ))}
        </KeysContainer>
        <DPadTexture src={currentTexture} alt="Phone D-pad texture" />
      </DPadContainer>
    );
  }
);

export default DPad;
