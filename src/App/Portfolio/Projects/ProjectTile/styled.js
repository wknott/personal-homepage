import styled from "styled-components";

export const Tile = styled.li`
  list-style-type: none;
  padding: 56px;
  background-color: ${({ theme }) => theme.color.sectionBackground};
  border: 6px solid ${({ theme }) => theme.color.divider};
  box-shadow: 0 -2px 50px rgba(9, 10, 51, 0.02), 0 16px 58px rgba(9, 10, 51, 0.03); 
  border-radius: 4px;
  transition: 0.3s linear;

  &:hover{
    border: 6px solid ${({ theme }) => theme.color.tileActiveBorder};
    box-shadow: 0 -2px 50px rgba(9, 10, 51, 0.02), 0 16px 58px rgba(9, 10, 51, 0.03);
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.iPad}px) {
    padding: 24px;
  };
`;

export const Title = styled.h4`
  margin: 0 0 24px;
  font-size: 24px;
  line-height: 1.21;
  color: ${({ theme }) => theme.color.projectTitle};

  @media(max-width: ${({ theme }) => theme.breakpoint.iPad}px) {
    font-size: 16px;
    line-height: 1.19;
    margin-bottom: 16px;
  };
`;

export const Description = styled.p`
  margin: 0 0 24px;
  font-size: 18px;
  line-height: 1.4;

  @media(max-width: ${({ theme }) => theme.breakpoint.iPad}px) {
    font-size: 14px;
    line-height: 1.21;
    margin-bottom: 16px;
  };
`;

export const Links = styled.dl`
  display: grid;
  grid-gap: 8px;
  font-size: 18px;
  line-height: 1.4;
  margin: 24px 0 0 0;

  @media(max-width: ${({ theme }) => theme.breakpoint.iPad}px) {
    font-size: 14px;
    line-height: 1.2;
    margin-top: 16px;
  };
`;

export const LinkRow = styled.div`
  display: grid;
  grid-template-columns: 4em 1fr;
  margin: 8px 0 0 0;
`;

export const LinkLabel = styled.dt`
  margin: 0 8px 0 0;
  min-width: 60px;

  @media(max-width: ${({ theme }) => theme.breakpoint.iPad}px) {
    min-width: 47px;
  };
`;

export const LinkValue = styled.dd`
  margin: 0;
`;

export const Link = styled.a`
  overflow-wrap: anywhere;
  color: ${({ theme }) => theme.color.primary};
  text-underline-offset: 3px;
  -webkit-text-decoration-color: ${({ theme }) => theme.color.linkUnderline};   
  text-decoration-color: ${({ theme }) => theme.color.linkUnderline};
  opacity: 0.8;

  &:hover{
    opacity: 1;
    -webkit-text-decoration-color: unset;
    text-decoration-color: unset;
  };
`;