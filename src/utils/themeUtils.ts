import { css, RuleSet } from "styled-components";

/**
 * Converts a size to pixels using theme's pixelSize or returns the size as-is if a string.
 * @param size - Number of pixel units or a string value (e.g., "1rem")
 */
export const px = (size: number | string = 1): RuleSet => css`
  ${({ theme }) =>
    typeof size === "number" ? `${theme.constants.pixelSize * size}px` : size}
`;
