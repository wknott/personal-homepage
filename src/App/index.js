import React from "react";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { GlobalStyle } from './GlobalStyle';
import { useDarkMode } from "./useDarkMode"
import About from "./About";
import Section from "./Section";
import { skills, futureSkills } from "./skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { Wrapper, Container } from "./styled";

const App = () => {
  const [themeMode, themeToggler] = useDarkMode();

  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Wrapper>
          <Container>
            <About theme={themeMode} themeToggler={themeToggler} />
            <Section header="My skillset includes 🛠️" skills={skills} />
            <Section header="What I want to learn next 🚀" skills={futureSkills} />
            <Portfolio />
            <Contact />
          </Container>
        </Wrapper>
      </>
    </ThemeProvider>
  );
}

export default App;
