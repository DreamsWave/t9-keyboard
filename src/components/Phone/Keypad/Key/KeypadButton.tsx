import React from "react";
import ButtonSVG from "../../../../assets/textures/button.svg";
import NinePatch from "../../../common/NinePatch";
import { KeypadButtonContainer, KeypadButtonContent } from "./Key.styles";

interface KeypadButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  noPadding?: boolean;
}

export const KeypadButton = React.memo(
  ({
    noPadding = false,
    isControl = false,
    children,
    ...props
  }: KeypadButtonProps & { isControl?: boolean }) => (
    <KeypadButtonContainer $isControl={isControl} {...props}>
      <NinePatch texture={ButtonSVG} patchMargin={4}>
        <KeypadButtonContent $noPadding={noPadding} $isControl={isControl}>
          {children}
        </KeypadButtonContent>
      </NinePatch>
    </KeypadButtonContainer>
  )
);
