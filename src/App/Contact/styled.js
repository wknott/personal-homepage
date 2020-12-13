import styled from "styled-components";

export const StyledInfo = styled.div`
  margin-top: 120px;
  width: 55%;

  @media(max-width: ${({ theme }) => theme.breakpoint.iPad}px) {
    width: 100%;
  };
`;

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

export const Email = styled.a`
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.05em;
  text-decoration: none;
  color: unset;
  margin-top: 24px;

  &:hover{
    color: ${({ theme }) => theme.color.mainBlue};
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 22px;
    line-height: 27px;
    margin-bottom: 16px;
  };
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  margin-top: 24px;
  margin-bottom: 0;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 17px;
    margin-bottom: 24px;
  };
`;

export const SocialContainer = styled.div`
  margin-top: 56px;
  display: flex;
`;

export const Link = styled.a`
  margin-right: 24px;
`;

export const Icon = styled.img`
  width: 48px;
  height: 48px;
  filter: ${({ theme }) => theme.color.textFilter};

  &:hover{
    filter: ${({ theme }) => theme.color.mainBlueFilter};
  }
`;