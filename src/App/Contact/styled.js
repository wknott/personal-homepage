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
  color: ${({ theme }) => theme.color.title};

  &:hover{
    color: ${({ theme }) => theme.color.primary};
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
  color: ${({ theme }) => theme.color.title};

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
  color: ${({ theme }) => theme.color.title};
  margin-right: 24px;
  transition: color 0.3s;

  &:hover{
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const StyledAddress = styled.address`
  font-style: unset;
`;