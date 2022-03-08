import React from "react";
import { Description, MiniTitle, StyledInfo, Title, Icon } from "./styled";
import Link from "../../Link";
import message from "../Message.svg";
import { email } from "../../socials";

const Info = () => (
  <StyledInfo>
    <MiniTitle>This is</MiniTitle>
    <Title>Wojciech Knott</Title>
    <Description>
      ⚛️ I'm a highly motivated Fullstack Web Developer,<br />
      with more than one year professional experience,<br />
      currently looking for new programming challenge.
    </Description>
    <Link href={`mailto:${email}`} title={email}>
      <Icon src={message} alt="email icon" />Hire Me
    </Link>
  </StyledInfo>
);

export default Info;