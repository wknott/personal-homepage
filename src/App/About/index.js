import React from "react";
import Image from "./Image";
import Info from "./Info";
import { Wrapper } from "./styled";

const About = ({ themeToggler }) => {

  return (
    <Wrapper>
      <Image />
      <Info
        miniTitle="This is"
        title="Wojciech Knott"
        description="⚛️ I'm React Frontend Developer. Rubik's Cube is my biggest passion."
      />
      <button onClick={themeToggler}>zmien</button>
    </Wrapper>
  )
};

export default About;
