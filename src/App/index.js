import React from "react";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { darkTheme, lightTheme } from './theme';
import { GlobalStyle } from './GlobalStyle';
import About from "./About";
import Section from "./Section";
import { futureSkills, professionalSkills, projectSkills } from "./skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { Wrapper, Container } from "./styled";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "./themeSlice";

const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <Normalize />
        <GlobalStyle />
        <Wrapper>
          <Container>
            <About />
            <Section header="My professional skillset includes 💻" skills={professionalSkills} />
            <Section header="My project skillset includes 🛠️" skills={projectSkills} />
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
