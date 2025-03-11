import { render, RenderOptions } from "@testing-library/react";
import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

// Mock theme object matching your app's theme structure
const mockTheme = {
  colors: {
    darkGrey: "#333",
    lightGrey: "#ccc",
    grey: "#666",
    white: "#fff",
    black: "#000",
    error: "#f00",
    errorHover: "#d00",
    success: "#0f0",
    successHover: "#0d0",
    greyHover: "#555",
    cyan: "#0ff",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
  },
  fontSize: {
    sm: "12px",
    lg: "18px",
    xl: "24px",
  },
  borderRadius: {
    sm: "4px",
    lg: "8px",
  },
  border: {
    inset: "inset 0 0 0 1px #000",
  },
  shadow: {
    lg: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  sizes: {
    phoneWidth: "320px",
    phoneHeight: "480px",
  },
};

// eslint-disable-next-line react-refresh/only-export-components
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={mockTheme as unknown as DefaultTheme}>
      {children}
    </ThemeProvider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything from @testing-library/react
// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";
// Override render method
export { customRender as render };
