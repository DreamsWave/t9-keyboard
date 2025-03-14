import styled, { css } from "styled-components";
import { getFontSize, px } from "../../../../utils/themeUtils";

export const Chars = styled.span`
  font-size: ${getFontSize("xs")};
  opacity: 0.7;
`;

const buttonBaseStyles = css`
  display: inline-flex;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.default};
  outline: none;
  font-family: "Monocraft";
  font-size: ${getFontSize("sm")};
`;

export const KeypadButtonContainer = styled.button<{ $isControl?: boolean }>`
  ${buttonBaseStyles}
  ${({ $isControl }) =>
    $isControl &&
    css`
      height: ${px(15)};
      width: ${px(20)};
    `}
`;

export const KeypadButtonContent = styled.div<{
  $noPadding: boolean;
  $isControl?: boolean;
}>`
  display: inline-flex;
  justify-content: ${({ $isControl }) => ($isControl ? "center" : "start")};
  align-items: center;
  gap: ${px(1)};
  padding: ${({ $noPadding }) => ($noPadding ? 0 : px(1))};
  height: 100%;
  width: 100%;
  cursor: pointer;
`;
