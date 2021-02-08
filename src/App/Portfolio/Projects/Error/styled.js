import styled from "styled-components";
import danger from "./danger.svg";
import dangerDark from "./danger-dark.svg";
import Link from "../../../Link";

export const Wrapper = styled.div`
  margin: 88px auto 0;
  text-align: center;
  max-width: 426px;
  color: ${({ theme }) => theme.color.title};

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 48px;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  line-height: 1.4;
  margin: 0;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
  }
`;


export const Icon = styled.div`
  margin: 0 auto 16px;
  width: 48px;
  height: 48px;
  background: url(${({ theme }) => theme.color.body === "#FBFBFE" ? danger : dangerDark});
  background-repeat: no-repeat;
`;

export const ErrorMessage = styled.h3`
  font-size: 24px;
  line-height: 1.21;
  text-align: center;
  margin: 16px auto 32px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const StyledLink = styled(Link)`
  margin: 32px auto 140px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 48px;
  }
`;