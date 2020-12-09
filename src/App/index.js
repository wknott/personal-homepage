import React, { useEffect } from "react";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { GlobalStyle } from './GlobalStyle';
import { useDarkMode } from "./useDarkMode"
import Container from "./Container";
import About from "./About";
import Section from "./Section";
import { skills, futureSkills } from "./skills";
import Portfolio from "./Portfolio";

const App = () => {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyle />
        <Container>
          <About theme={theme} themeToggler={themeToggler} />
          <Section header="My skillset includes 🛠️" skills={skills} />
          <Section header="What I want to learn next 🚀" skills={futureSkills} />
          <Portfolio />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
