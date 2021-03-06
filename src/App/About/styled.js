import styled from "styled-components";

export const Wrapper = styled.header`
  display: grid;
  align-items: center;
  grid-template-rows: auto 1fr;
  grid-template-areas: 
    "image button"
    "image info";

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-areas: 
      "image button"
      "info info";
  };
`;
