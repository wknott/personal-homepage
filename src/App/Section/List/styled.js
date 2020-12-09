import styled from "styled-components";

export const StyledList = styled.ul`
  margin-top: 32px;
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: space-between;
  grid-row-gap: 8px;
  grid-auto-flow: row;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: row;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.secondaryText};
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
`;

export const Bullet = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
  background-color: ${({ theme }) => theme.color.mainBlue};
  margin-right: 16px;
`;