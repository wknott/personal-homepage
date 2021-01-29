import React from "react";
import { Description, MiniTitle, StyledInfo, Title, Icon } from "./styled";
import Link from "../../Link";
import message from "../message.svg";
import { email } from "../../socials";

const Info = () => (
  <StyledInfo>
    <MiniTitle>This is</MiniTitle>
    <Title>Wojciech Knott</Title>
    <Description>
      ⚛️ I'm a highly motivated React Frontend Developer,
      currently looking for new programming experience.
    </Description>
    <Link href={`mailto:${email}`}>
      <Icon src={message} alt="email icon" />Hire Me
    </Link>
  </StyledInfo>
);

export default Info;