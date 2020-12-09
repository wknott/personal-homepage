import styled from "styled-components";

export const StyledSection = styled.section`
  background: ${({ theme }) => theme.color.sectionBackground};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  padding: 32px;
  margin-top: 73px;
`;

export const SectionHeader = styled.h2`
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.05em;
  margin: 0;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.color.divider};
`;