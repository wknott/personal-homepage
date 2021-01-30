import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 88px;
  text-align: center;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 48px;
  }
`;

export const Subtitle = styled.h3`
  font-weight: normal;
  font-size: 20px;
  line-height: 1.4;
  margin: 8px 0 0;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 16px;
    font-size: 17px;
  }
`;


export const Icon = styled.img`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  animation: spinner 1s linear infinite;
  margin: 48px auto 140px;
  width: 160px;
  height: 160px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 48px;
    width: 80px;
    height: 80px;
  }
`;