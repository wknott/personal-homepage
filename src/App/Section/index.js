import React from "react";
import { SectionHeader, StyledSection } from "./styled";

const Section = ({ header, skills }) => {
  return (
    <StyledSection>
      <SectionHeader>{header}</SectionHeader>
      {/* <List elements={skills} /> */}
    </StyledSection>
  );
};

export default Section;