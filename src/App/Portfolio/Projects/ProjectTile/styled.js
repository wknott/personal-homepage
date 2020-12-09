import styled from "styled-components";

export const Tile = styled.div`
  padding: 56px;
  background-color: ${({ theme }) => theme.color.sectionBackground};
  border: 6px solid ${({ theme }) => theme.color.divider};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03); 
  border-radius: 4px;
`;

export const Title = styled.h2`
  margin: 0 0 24px;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.mainBlue};
`;

export const Description = styled.p`
  margin: 0 0 24px;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.secondaryText};
`;