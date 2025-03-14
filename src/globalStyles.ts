import { createGlobalStyle } from "styled-components";
import Monocraft from "./assets/fonts/monocraft/Monocraft.otf";
import { getFontSize } from "./utils/themeUtils";

export default createGlobalStyle`
  @font-face {
    font-family: "Monocraft";
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url(${Monocraft}) format("opentype");
  }

  body {
    margin: 0;
    font-family: "Monocraft", system-ui, sans-serif;
    font-size: ${getFontSize("base")};
    line-height: ${({ theme }) => theme.lineHeights.base};
    font-weight: ${({ theme }) => theme.fontWeights.base};
    color: ${({ theme }) => theme.colors.text.default};
    background-color: ${({ theme }) => theme.colors.background.default};
  }
`;
