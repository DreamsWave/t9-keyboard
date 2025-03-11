import { createGlobalStyle } from "styled-components";
import Monocraft from "./assets/fonts/monocraft/Monocraft.otf";

export default createGlobalStyle`

  @font-face {
    font-family: 'Monocraft';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url(${Monocraft});
    src: url(${Monocraft}) format('embedded-opentype')
  }

  body {
    font-family: "Monocraft", system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    line-height: ${({ theme }) => theme.lineHeights.base};
    font-weight: ${({ theme }) => theme.fontWeights.base};
    color: ${({ theme }) => theme.colors.text.default};
  }
`;
