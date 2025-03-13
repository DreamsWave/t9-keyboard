import React from "react";
import ButtonPressedSVG from "../../../../assets/textures/phone-button/button-pressed.svg";
import ButtonSVG from "../../../../assets/textures/phone-button/button.svg";
import NinePatch from "../../../common/NinePatch";
import { KeypadButtonContainer, KeypadButtonContent } from "./Key.styles";

interface KeypadButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  noPadding?: boolean;
  pressed?: boolean;
  isControl?: boolean;
}

export const KeypadButton = React.memo(
  ({
    noPadding = false,
    isControl = false,
    pressed = false,
    children,
    ...props
  }: KeypadButtonProps) => (
    <KeypadButtonContainer $isControl={isControl} {...props}>
      <NinePatch
        texture={pressed ? ButtonPressedSVG : ButtonSVG}
        patchMargin={4}
      >
        <KeypadButtonContent $noPadding={noPadding} $isControl={isControl}>
          {children}
        </KeypadButtonContent>
      </NinePatch>
    </KeypadButtonContainer>
  )
);
