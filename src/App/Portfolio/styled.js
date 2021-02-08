import styled from "styled-components";

export const Container = styled.section`
  margin-top: 72px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 48px;
  }
`;

export const Header = styled.header`
  text-align: center;
  color: ${({ theme }) => theme.color.title};
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
  line-height: 1.2;
  margin: 12px 0 0;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
    line-height: 1.22;
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