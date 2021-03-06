import styled from "styled-components";

export const ProjectsContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  margin-top: 24px;
  padding: 0;
  
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  };
`;