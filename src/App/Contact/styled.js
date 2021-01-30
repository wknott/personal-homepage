import styled from "styled-components";

export const StyledInfo = styled.footer`
  margin-top: 120px;
  width: 55%;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 48px;
    width: unset;
  };
`;

export const MiniTitle = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.secondaryText};
  margin-top: 0;
  margin-bottom: 24px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 12px;
  };
`;

export const Email = styled.a`
  font-weight: 900;
  font-size: 32px;
  line-height: 1.22;
  text-decoration: none;
  color: inherit;
  margin-top: 24px;
  transition: 0.3s linear;

  &:hover{
    color: ${({ theme }) => theme.color.mainBlue};
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
    line-height: 1.22;
    margin-bottom: 16px;
  };
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.4;
  margin-top: 24px;
  margin-bottom: 0;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    line-height: 1.21;
  };
`;

export const SocialContainer = styled.div`
  margin-top: 56px;
  display: flex;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 40px;
  };
`;

export const Link = styled.a`
  margin-right: 24px;
`;

export const Icon = styled.img`
  width: 48px;
  height: 48px;
  filter: ${({ theme }) => theme.color.textFilter};
  transition: 0.2s linear;

  &:hover{
    filter: ${({ theme }) => theme.color.mainBlueFilter};
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 32px;
    height: 32px;
  };
`;

export const StyledAddress = styled.address`
  font-style: unset;
`;