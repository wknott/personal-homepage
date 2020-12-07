import styled from "styled-components";

export default styled.main`
  margin: auto;
  max-width: 1216px;
  padding: 119px 0px 109px;

  @media(max-width: ${({ theme }) => theme.breakpoint.desktopHD}px) {
    width: calc(100% - 2 * 32px);
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 21px 0px 31px;
    width: calc(100% - 2 * 16px);
  }
`;