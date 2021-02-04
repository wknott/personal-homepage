import styled from "styled-components";

export const StyledInfo = styled.div`
  grid-area: info;
  padding-right: 128px;

  @media(max-width: ${({ theme }) => theme.breakpoint.iPad}px) {
    padding-right: 0;
  };
`;

export const MiniTitle = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.secondaryText};
  margin-top: 0;
  letter-spacing: initial;
  
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 8px;
  };
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 38px;
  line-height: 1.21;
  margin-top: 0;
  margin-bottom: 36px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 22px;
    line-height: 1.23;
    margin-bottom: 16px;
  };
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.secondaryText};
  margin-top: 0;
  margin-bottom: 32px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 17px;
    margin-bottom: 24px;
  };
`;

export const Icon = styled.img`
  width: 24px;
  height: auto;
  margin-right: 16px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 20px;
    margin-right: 12px;
  };
`;