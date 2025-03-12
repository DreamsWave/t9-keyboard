import styled from "styled-components";
import ButtonSVG from "../../../assets/textures/button.svg";
import { px } from "../../../utils/themeUtils";
import NinePatch from "../../common/NinePatch";

const KeypadButtonContainer = styled.button`
  display: inline-flex;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.default};
  outline: none;
  font-family: "Monocraft";
`;

const KeypadButtonContent = styled.div<{ $noPadding: boolean }>`
  display: inline-flex;
  justify-content: start;
  align-items: center;
  gap: ${px(1)};
  padding: ${({ $noPadding }) => ($noPadding ? 0 : px(1))};
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

interface KeypadButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  noPadding?: boolean;
}

function KeypadButton({
  noPadding = false,
  children,
  ...props
}: KeypadButtonProps) {
  return (
    <KeypadButtonContainer {...props}>
      <NinePatch texture={ButtonSVG} patchMargin={4}>
        <KeypadButtonContent $noPadding={noPadding}>
          {children}
        </KeypadButtonContent>
      </NinePatch>
    </KeypadButtonContainer>
  );
}

export default KeypadButton;
