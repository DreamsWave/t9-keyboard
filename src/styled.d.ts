import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        black: string;
        white: string;
      };
      grey: {
        default: string;
        hover: string;
        dark: string;
        light: string;
      };
      status: {
        error: {
          default: string;
          hover: string;
        };
        success: {
          default: string;
          hover: string;
        };
      };
      accent: {
        cyan: string;
      };
      text: {
        default: string;
        light: string;
        dark: string;
      };
      background: {
        default: string;
        light: string;
        dark: string;
      };
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    typography: {
      fontSize: {
        sm: string;
        base: string;
        lg: string;
        xl: string;
      };
    };
    fontWeights: {
      base: number;
      bold: number;
    };
    lineHeights: {
      none: number;
      base: number;
      large: number;
    };
    border: {
      radius: {
        sm: string;
        lg: string;
      };
      style: {
        inset: string;
      };
    };
    elevation: {
      shadow: {
        lg: string;
      };
    };
    layout: {
      phone: {
        width: string;
        height: string;
      };
    };
    constants: {
      pixelSize: number;
    };
  }
}
