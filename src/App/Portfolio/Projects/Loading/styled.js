import styled, { keyframes } from "styled-components";

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
  color: ${({ theme }) => theme.color.title};

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 16px;
    font-size: 17px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Icon = styled.img`
  animation: ${rotate} 1s linear infinite;
  margin: 48px auto 140px;
  width: 160px;
  height: 160px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 48px;
    width: 80px;
    height: 80px;
  }
`;