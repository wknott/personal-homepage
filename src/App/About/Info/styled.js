import styled from "styled-components";

export const MiniTitle = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.secondaryText};
  margin-top: 0;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 8px;
  };
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 38px;
  line-height: 46px;
  letter-spacing: 0.05em;
  margin-top: 0;
  margin-bottom: 35px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 22px;
    line-height: 27px;
    margin-bottom: 16px;
  };
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.secondaryText};
  margin-top: 0;
  margin-bottom: 32px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 17px;
    margin-bottom: 24px;
  };
`;