import React from "react";
import Image from "./Image";
import Info from "./Info";
import { Wrapper } from "./styled";
import ThemeButton from "./ThemeButton";
import profileImage from "./profile-image.jpg";

const About = ({ theme, toggleTheme }) => (
  <Wrapper>
    <Image src={profileImage} alt="my profile picture" />
    <Info />
    <ThemeButton theme={theme} toggleTheme={toggleTheme} />
  </Wrapper>
);

export default About;
