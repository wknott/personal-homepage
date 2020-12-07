import React from "react";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { GlobalStyle } from './GlobalStyle';
import { useDarkMode } from "./useDarkMode"
import Container from "./Container";

const App = () => {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyle />
        <Container>
          <button onClick={themeToggler}>zmien</button>
          <h1>Homepage</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
