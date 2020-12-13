import React from "react";
import { ErrorMessage, Icon, Text, Wrapper, StyledLink } from "./styled";
import { socials } from "../../../Contact/socials";

const Error = () => (
  <Wrapper>
    <Icon />
    <ErrorMessage>Ooops! Something went wrong…</ErrorMessage>
    <Text>
      Sorry, failed to load Github projects.
    </Text>
    <Text>
      You can check them directly on Github.
    </Text>
    <StyledLink href={socials[0].url} target="_blank">
      Go to Github
    </StyledLink>
  </Wrapper>
);

export default Error;