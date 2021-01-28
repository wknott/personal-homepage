import styled from "styled-components";

export const Container = styled.section`
  margin-top: 72px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 48px;
  }
`;

export const Header = styled.header`
  text-align: center;
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 32px;
    height: 32px;
  }
`;

export const Title = styled.h2`
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.05em;
  margin: 12px 0px 0px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
    line-height: 22px;
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