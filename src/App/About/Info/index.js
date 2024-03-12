import React from "react";
import { Description, MiniTitle, StyledInfo, Title, Icon } from "./styled";
import Link from "../../Link";
import message from "../Message.svg";
import { email } from "../../socials";
import { differenceInYears } from "date-fns";

const START_DATE = new Date("2021-03-01");

const getMyExpirienceYears = () => differenceInYears(new Date(), START_DATE);

const Info = () => (
  <StyledInfo>
    <MiniTitle>This is</MiniTitle>
    <Title>Wojciech Knott</Title>
    <Description>
      ⚛️ I'm a highly motivated Web Developer,<br />
      with {getMyExpirienceYears()} years of professional experience,<br />
      currently looking for new programming challenge.
    </Description>
    <Link href={`mailto:${email}`} title={email}>
      <Icon src={message} alt="email icon" />Hire Me
    </Link>
  </StyledInfo>
);

export default Info;