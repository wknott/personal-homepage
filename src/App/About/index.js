import React from "react";
import Link from "../Link";
import Image from "./Image";
import Info from "./Info";
import { Wrapper, Icon } from "./styled";
import ThemeButton from "./ThemeButton";
import message from "./Message.svg";
import { email } from "../Contact/socials";
import profileImage from "./profile-image.png";

const About = ({ theme, themeToggler }) => (
  <Wrapper>
    <Image src={profileImage} alt="my profile picture" />
    <Info
      miniTitle="This is"
      title="Wojciech Knott"
      description={"⚛️ I'm a highly motivated React Frontend Developer, currently looking for new programming experience."}
      extraContent={
        <Link href={`mailto:${email}`}>
          <Icon width={24} height={24} src={message} />Hire Me
        </Link>
      }
    />
    <ThemeButton theme={theme} themeToggler={themeToggler} />
  </Wrapper>
);

export default About;
