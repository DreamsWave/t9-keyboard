import styled from "styled-components";
import ButtonSVG from "../../assets/textures/button.svg";
import { px } from "../../utils/themeUtils";
import NinePatch from "../common/NinePatch";

const KeypadButtonContainer = styled.button`
  display: inline-flex;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.default};
  outline: none;
`;

const KeypadButtonContent = styled.div`
  display: inline-flex;
  justify-content: start;
  align-items: center;
  gap: ${px(1)};
  padding: ${px(1)};
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

interface KeypadButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function KeypadButton({ children, ...props }: KeypadButtonProps) {
  return (
    <KeypadButtonContainer {...props}>
      <NinePatch texture={ButtonSVG} patchMargin={4}>
        <KeypadButtonContent>{children}</KeypadButtonContent>
      </NinePatch>
    </KeypadButtonContainer>
  );
}

export default KeypadButton;
