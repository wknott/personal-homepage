import React from "react";
import Button from "./Button";
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
        extraContent={<Button />}
      />
      <button onClick={themeToggler}>zmien</button>
    </Wrapper>
  )
};

export default About;
