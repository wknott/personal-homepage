import React from "react";
import { Icon, StyledButton } from "./styled";
import message from "./Message.svg";

const Button = () => (
  <StyledButton >
    <Icon width={24} height={24} src={message} />Hire Me
  </StyledButton>
);

export default Button;
