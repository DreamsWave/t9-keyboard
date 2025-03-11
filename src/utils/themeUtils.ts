import { css } from "styled-components";

export const px = (size: number = 1) => css`
  ${({ theme }) => `${theme.constants.pixelSize * size}px`}
`;
