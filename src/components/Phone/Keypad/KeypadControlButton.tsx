import styled from "styled-components";
import ButtonSVG from "../../../assets/textures/button.svg";
import { px } from "../../../utils/themeUtils";
import NinePatch from "../../common/NinePatch";

const KeypadControlButtonContainer = styled.button`
  display: inline-flex;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.default};
  outline: none;
  font-family: "Monocraft";
  height: ${px(15)};
  width: ${px(20)};
`;

const KeypadControlButtonContent = styled.div<{ $noPadding: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${px(1)};
  padding: ${({ $noPadding }) => ($noPadding ? 0 : px(1))};
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

interface KeypadControlButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  noPadding?: boolean;
}

function KeypadControlButton({
  noPadding = false,
  children,
  ...props
}: KeypadControlButtonProps) {
  return (
    <KeypadControlButtonContainer {...props}>
      <NinePatch texture={ButtonSVG} patchMargin={4}>
        <KeypadControlButtonContent $noPadding={noPadding}>
          {children}
        </KeypadControlButtonContent>
      </NinePatch>
    </KeypadControlButtonContainer>
  );
}

export default KeypadControlButton;
