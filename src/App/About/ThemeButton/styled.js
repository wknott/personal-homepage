import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "./sun.svg";

export const Container = styled.div`
  grid-area: button;
  justify-self: flex-end;
  display: flex;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    align-self: flex-start;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: inherit;
  display: flex;
  align-items: center;
  cursor: pointer;
  outline-offset: 8px;
`;

export const Text = styled.span`
  font-weight: bold;
  font-size: 12px;
  line-height: 1.3;
  text-transform: uppercase;
  margin-right: 12px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const Box = styled.span`
  width: 48px;
  background: ${({ theme }) => theme.color.buttonBackground};
  border: 1px solid;
  padding: 3px;
  border-radius: 13px;
  display: flex;
`;

export const IconWrapper = styled.span`
  color: ${({ theme }) => theme.color.themeButton.iconWrapper};
  padding: 3px;
  border-radius: 50%;
  display: flex;
  transition: transform 0.3s;

  ${({ moveToRight }) => !moveToRight && css`
    transform: translate(20px);
  `}
`;

export const Icon = styled(SunIcon)`
  color: ${({ theme }) => theme.color.themeButton.icon};
`;
