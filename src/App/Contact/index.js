import React from "react";
import { Description, MiniTitle, StyledInfo, Email, SocialContainer, Link, Icon } from "./styled";
import { email, socials } from "./socials";

const Contact = () => (
  <StyledInfo>
    <MiniTitle>Let's talk!</MiniTitle>
    <Email href={`mailto:${email}`}>{email}</Email>
    <Description>
      I’m always open to new projects whenever I have the time.
      If you have a website, dashboard or mobile app in mind and need some help
      to make your ideas come to life, feel free to conatct me!
    </Description>
    <SocialContainer>
      {socials.map(social =>
        <Link key={social.id} href={social.url} target="_blank">
          <Icon src={social.imgUrl} />
        </Link>
      )}
    </SocialContainer>
  </StyledInfo>
);

export default Contact;