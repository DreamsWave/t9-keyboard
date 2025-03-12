import styled, { css } from "styled-components";
import { px } from "../../../../utils/themeUtils";

export const DPadContainer = styled.div`
  height: ${px(30)};
  width: ${px(30)};
  position: relative;
  margin-top: ${px(1)};
`;

export const DPadTexture = styled.img`
  height: ${px(30)};
  width: ${px(30)};
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
`;

export const KeysContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;
`;

export const DPadButton = styled.button<{
  $position: "up" | "right" | "down" | "left";
}>`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  position: absolute;
  width: ${px(10)};
  height: ${px(10)};
  ${({ $position }) =>
    $position === "up" &&
    css`
      top: 0;
      left: ${px(10)};
    `}
  ${({ $position }) =>
    $position === "right" &&
    css`
      top: ${px(10)};
      right: 0;
    `}
  ${({ $position }) =>
    $position === "down" &&
    css`
      bottom: 0;
      left: ${px(10)};
    `}
  ${({ $position }) =>
    $position === "left" &&
    css`
      top: ${px(10)};
      left: 0;
    `}
`;
