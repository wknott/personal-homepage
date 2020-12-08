import React from "react";
import { Description, MiniTitle, StyledInfo, Title } from "./styled";

const Info = ({ miniTitle, title, description, extraContent }) => (
  <StyledInfo>
    <MiniTitle>{miniTitle}</MiniTitle>
    <Title>{title}</Title>
    <Description>{description}</Description>
    {extraContent}
  </StyledInfo>
);

export default Info;