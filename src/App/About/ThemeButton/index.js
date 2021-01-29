import React from "react";
import { Background, Button, Container, DarkIcon, LightIcon, Text } from "./styled";
import light from "./light.svg";
import dark from "./dark.svg";

const ThemeButton = ({ theme, toggleTheme }) => (
  <Container>
    <Text>Dark mode {theme === "light" ? "off" : "on"}</Text>
    <Background>
      <Button onClick={toggleTheme}>
        <LightIcon url={light} isLight={theme === "light"} />
        <DarkIcon url={dark} isLight={theme === "light"} />
      </Button>
    </Background>
  </Container>
)

export default ThemeButton;