import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.body};
  color: ${({ theme }) => theme.color.text};
  transition: background 0.5s linear, color 0.5s linear;
`;

export const Container = styled.main`
  margin: auto;
  max-width: 1216px;
  padding: 119px 0 109px;

  @media(max-width: ${({ theme }) => theme.breakpoint.desktopHD}px) {
    width: calc(100% - 2 * 32px);
  };

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 21px 0 31px;
    width: calc(100% - 2 * 16px);
  };
`;