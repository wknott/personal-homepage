import React from "react";
import github from "./github.svg";
import { Container, Header, Icon, Subtitle, Title } from "./styled";

const Portfolio = () => {
  return (
    <Container>
      <Header>
        <Icon src={github} />
        <Title>Portfolio</Title>
        <Subtitle>My recent projects</Subtitle>
      </Header>
    </Container>
  );
};

export default Portfolio;