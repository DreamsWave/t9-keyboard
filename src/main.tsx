import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Root element '#root' not found");
  document.body.innerHTML =
    "<p style='color: red; text-align: center;'>Error: Application failed to load. Please check the DOM for '#root'.</p>";
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
