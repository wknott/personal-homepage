import React from "react";
import List from "./List";
import { SectionHeader, StyledSection } from "./styled";

const Section = ({ header, skills }) => {
  return (
    <StyledSection>
      <SectionHeader>{header}</SectionHeader>
      <List items={skills} />
    </StyledSection>
  );
};

export default Section;