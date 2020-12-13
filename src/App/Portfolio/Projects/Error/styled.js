import styled from "styled-components";
import danger from "./danger.svg";
import dangerDark from "./danger-dark.svg";
import Link from "../../../Link";

export const Wrapper = styled.div`
  margin-top: 88px;
  margin: 88px auto 0px;
  text-align: center;
  max-width: 426px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 48px;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  margin: 0;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
  }
`;


export const Icon = styled.div`
  margin: 0px auto 16px;
  width: 48px;
  height: 48px;
  background: url(${({ theme }) => theme.name === "light" ? danger : dangerDark});
  background-repeat: no-repeat;
`;

export const ErrorMessage = styled.h3`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.05em;
  margin: 16px auto 32px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const StyledLink = styled(Link)`
  margin: 32px auto 140px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 48px;
  }
`;