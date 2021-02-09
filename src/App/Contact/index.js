import React from "react";
import {
  Description,
  MiniTitle,
  StyledInfo,
  Email,
  SocialContainer,
  Link,
  Icon,
  StyledAddress
} from "./styled";
import { email, socials } from "../socials";

const Contact = () => (
  <StyledInfo>
    <MiniTitle>Let's talk!</MiniTitle>
    <StyledAddress>
      <Email href={`mailto:${email}`} title={email}>{email}</Email>
    </StyledAddress>
    <Description>
      I’m always open to new projects.
      If you have any ideas and need some help with a website or web application, feel free to contact me!
    </Description>
    <SocialContainer>
      {socials.map(({ id, url, Icon }) =>
        <Link key={id} href={url} target="_blank" title={url}>
          <Icon />
        </Link>
      )}
    </SocialContainer>
  </StyledInfo>
);

export default Contact;