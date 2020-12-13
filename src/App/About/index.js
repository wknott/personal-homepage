import React from "react";
import Button from "../Button";
import Image from "./Image";
import Info from "./Info";
import { Wrapper, Icon } from "./styled";
import ThemeButton from "./ThemeButton";
import message from "./Message.svg";

const About = ({ theme, themeToggler }) => (
  <Wrapper>
    <Image />
    <Info
      miniTitle="This is"
      title="Wojciech Knott"
      description="⚛️ I'm React Frontend Developer. Rubik's Cube is my biggest passion."
      extraContent={
        <Button >
          <Icon width={24} height={24} src={message} />Hire Me
        </Button>
      }
    />
    <ThemeButton theme={theme} themeToggler={themeToggler} />
  </Wrapper>
);

export default About;
