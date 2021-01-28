import React from "react";
import github from "./github.svg";
import Projects from "./Projects";
import { Container, Header, Icon, Subtitle, Title } from "./styled";

const Portfolio = () => {

  return (
    <Container>
      <Header>
        <Icon src={github} alt="github logo" />
        <Title>Portfolio</Title>
        <Subtitle>My recent projects</Subtitle>
      </Header>
      <Projects />
    </Container>
  );
};

export default Portfolio;