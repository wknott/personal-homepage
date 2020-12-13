import styled from "styled-components";
import spinner from "./spinner.svg";
import spinnerDark from "./spinner-dark.svg";

export const Wrapper = styled.div`
  margin-top: 88px;
  text-align: center;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 48px;
  }
`;

export const Subtitle = styled.h3`
  font-weight: normal;
  font-style: normal;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  margin: 8px 0px 0px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 16px;
    font-size: 17px;
  }
`;


export const Icon = styled.div`
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
  background: url(${({ theme }) => theme.name === "light" ? spinner : spinnerDark});
  background-repeat: no-repeat;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 48px;
  }
`;