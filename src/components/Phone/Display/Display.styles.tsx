import styled, { css } from "styled-components";
import { getFontSize, px } from "../../../utils/themeUtils";

const textStyles = css`
  font-family: "Monocraft", Courier, monospace;
  font-size: ${getFontSize("base")};
  color: ${({ theme }) => theme.colors.text.default};
  line-height: 1.2;
  box-sizing: border-box;
`;

export const PhoneDisplay = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.white};
  overflow: hidden;
  display: flex;
  z-index: 1;
  position: absolute;
  top: ${px(17)};
  left: ${px(10)};
  height: ${px(83)};
  width: ${px(68)};
  flex-direction: column;
`;

export const DisplayWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.white};
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
  overflow: hidden;
  display: flex;
  position: relative;
`;

export const DisplayContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const DisplayText = styled.div`
  ${textStyles}
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  white-space: pre-wrap;
  text-align: start;
  overflow-wrap: break-word;
  position: relative;
  user-select: none;
`;

export const Textarea = styled.textarea<{ $isVisible: boolean }>`
  ${textStyles}
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  resize: none;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
`;

export const Cursor = styled.span`
  width: 0;
  height: 1em;
  position: relative;
  display: inline-block;
  vertical-align: middle;

  &:after {
    content: "";
    position: absolute;
    height: 100%;
    width: 2px;
    top: 0;
    right: -2px;
    background-color: ${({ theme }) => theme.colors.accent.blue};
    animation: blink 1.5s step-end infinite;
    @keyframes blink {
      50% {
        background-color: transparent;
      }
    }
  }
`;

export const DisplayControlIndicators = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: ${({ theme }) => theme.colors.accent.blue};
`;

export const DisplayControlIndicator = styled.button`
  font-family: "Monocraft", Courier, monospace;
  font-size: ${getFontSize("sm")};
  padding: ${px(1)} ${px(3)};
  color: ${({ theme }) => theme.colors.primary.white};
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
