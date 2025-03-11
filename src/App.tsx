import { ThemeProvider } from "styled-components";
import "./App.css";
import PhoneFeedbackForm from "./components/PhoneFeedback/PhoneFeedbackForm";
import GlobalStyles from "./globalStyles";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PhoneFeedbackForm />
    </ThemeProvider>
  );
}

export default App;
