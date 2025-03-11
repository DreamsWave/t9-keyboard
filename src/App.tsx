import { ThemeProvider } from "styled-components";
import "./App.css";
import PhoneFeedbackForm from "./components/PhoneFeedback/PhoneFeedbackForm";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PhoneFeedbackForm />
    </ThemeProvider>
  );
}

export default App;
