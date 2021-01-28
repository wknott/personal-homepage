import React from "react";
import { Description, MiniTitle, StyledInfo, Email, SocialContainer, Link, Icon } from "./styled";
import { email, socials } from "./socials";

const Contact = () => (
  <StyledInfo>
    <MiniTitle>Let's talk!</MiniTitle>
    <Email href={`mailto:${email}`}>{email}</Email>
    <Description>
      I’m always open to new projects.
      If you have any ideas and need some help with a website or web application, feel free to contact me!
    </Description>
    <SocialContainer>
      {socials.map(social =>
        <Link key={social.id} href={social.url} target="_blank">
          <Icon src={social.imgUrl} alt={`${social.id} icon`} />
        </Link>
      )}
    </SocialContainer>
  </StyledInfo>
);

export default Contact;