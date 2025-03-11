import styled, { ThemeProvider } from "styled-components";
import PhoneFeedbackForm from "./components/PhoneFeedback/PhoneFeedbackForm";
import GlobalStyles from "./globalStyles";
import theme from "./theme";

const Container = styled.div`
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.default};
`;

const Center = styled.div`
  margin: 0 auto;
`;

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
