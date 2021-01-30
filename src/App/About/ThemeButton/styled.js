import styled, { css } from "styled-components";

export const Container = styled.div`
  grid-area: button;
  justify-self: flex-end;
  display: flex;
  align-items: center;
  position: relative;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    align-self: start;
  }
`;

export const Button = styled.button`
  width: 48px;
  height: 26px;
  background: ${({ theme }) => theme.color.buttonBackground};
  border: 1px solid ${({ theme }) => theme.color.secondaryText};
  border-radius: 13px;
  color: ${({ theme }) => theme.color.text};
  outline: none;
  padding: 3px;
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.black};
  };
`;

export const Background = styled.div`
  width: 48px;
  height: 26px;
  background: ${({ theme }) => theme.color.white};
  border-radius: 13px;
`;

export const Text = styled.span`
  font-weight: bold;
  font-size: 12px;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.secondaryText};
  margin-right: 12px;
  white-space: nowrap;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

const Icon = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 14px 14px;
  background-color: ${({ theme }) => theme.color.secondaryText};
`;

export const LightIcon = styled(Icon)`
  transition: all 0.5s linear;

  ${({ isLight }) => !isLight && css`
    transform: translateX(-25px);
  `}
`;

export const DarkIcon = styled(Icon)`
  transition: all 0.5s linear;

  ${({ isLight }) => isLight && css`
    transform: translateX(25px);
  `}
`;