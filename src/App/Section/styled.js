import styled from "styled-components";

export const StyledSection = styled.section`
  background: ${({ theme }) => theme.color.sectionBackground};
  box-shadow: 0 -2px 50px rgba(9, 10, 51, 0.02), 0 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  padding: 32px;
  margin-top: 72px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 16px;
    margin-top: 48px;
  }
`;

export const SectionHeader = styled.h2`
  font-weight: 900;
  font-size: 30px;
  line-height: 1.2;
  margin: 0;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.color.divider};
  color: ${({ theme }) => theme.color.title};
  
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
    line-height: 1.2;
    padding-bottom: 12px;
    letter-spacing: 0;
  }
`;