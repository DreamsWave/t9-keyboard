const theme = {
  colors: {
    primary: {
      black: "#000",
      white: "#fff",
    },
    grey: {
      default: "#666",
      hover: "#888",
      dark: "#333",
      light: "#d0d0d0",
    },
    status: {
      error: {
        default: "#a00",
        hover: "#c00",
      },
      success: {
        default: "#0a0",
        hover: "#0c0",
      },
    },
    accent: {
      cyan: "#00FFFF",
    },
    text: {
      default: "#5b5c69",
      light: "#fff",
      dark: "#000",
    },
    background: {
      default: "#a6aeba",
      light: "#000",
      dark: "#000",
    },
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.625rem",
    md: "0.9375rem",
    lg: "1.25rem",
  },
  typography: {
    fontSize: {
      sm: "0.75rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
    },
  },
  fontWeights: {
    base: 500,
    bold: 700,
  },
  lineHeights: {
    none: 0.9,
    base: 1,
    large: 1.5,
  },
  border: {
    radius: {
      sm: "0.3125rem",
      lg: "1.25rem",
    },
    style: {
      inset: "0.3125rem inset #999",
    },
  },
  elevation: {
    shadow: {
      lg: "0 0 1.25rem rgba(0, 0, 0, 0.5)",
    },
  },
  layout: {
    phone: {
      width: "18.75rem",
      height: "31.25rem",
    },
  },
  constants: {
    pixelSize: 3,
  },
};

export default theme;
