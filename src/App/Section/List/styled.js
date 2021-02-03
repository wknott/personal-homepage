import styled from "styled-components";

export const StyledList = styled.ul`
  margin-top: 32px;
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(360px, 1fr) );
  justify-content: space-between;
  grid-row-gap: 8px;
  margin-bottom: 0;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    margin-top: 12px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.secondaryText};
  font-size: 18px;
  line-height: 1.4;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    line-height: 1.21;
  }
`;

export const Bullet = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
  background-color: ${({ theme }) => theme.color.mainBlue};
  margin-right: 16px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    margin-right: 8px;
  }
`;