import { ThemeProvider } from "styled-components";
import { Center, Container } from "./App.styles";
import PhoneFeedbackForm from "./components/Phone/Phone";
import GlobalStyles from "./globalStyles";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Center>
          <PhoneFeedbackForm />
        </Center>
      </Container>
    </ThemeProvider>
  );
}

export default App;
