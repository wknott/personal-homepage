import React from "react";
import { Description, MiniTitle, Title } from "./styled";

const Info = ({ miniTitle, title, description, extraContent }) => (
  <section>
    <MiniTitle>{miniTitle}</MiniTitle>
    <Title>{title}</Title>
    <Description>{description}</Description>
    {extraContent}
  </section>
);

export default Info;