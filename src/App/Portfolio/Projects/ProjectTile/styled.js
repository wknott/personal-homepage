import styled from "styled-components";

export const Tile = styled.div`
  padding: 56px;
  background-color: ${({ theme }) => theme.color.sectionBackground};
  border: 6px solid ${({ theme }) => theme.color.divider};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03); 
  border-radius: 4px;

  &:hover{
    border: 6px solid ${({ theme }) => theme.color.tileActiveBorder};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  }
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

export const LinkContainer = styled.div`
  display: flex;
`;

export const LinkLabel = styled(Description)`
  margin: 0 8px 0 0;
  min-width: 60px;
`;

export const Link = styled.a`
  word-wrap: anywhere;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.mainBlue};
  text-decoration-line: underline;
  opacity: 0.8;

  &:hover{
    opacity: 1;
  }
`;