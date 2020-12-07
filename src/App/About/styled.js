import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-wrap: wrap;
  };
`;