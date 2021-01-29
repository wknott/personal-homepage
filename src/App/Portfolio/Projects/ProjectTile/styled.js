import styled from "styled-components";

export const Tile = styled.li`
  list-style-type: none;
  padding: 56px;
  background-color: ${({ theme }) => theme.color.sectionBackground};
  border: 6px solid ${({ theme }) => theme.color.divider};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03); 
  border-radius: 4px;
  transition: 0.3s linear;

  &:hover{
    border: 6px solid ${({ theme }) => theme.color.tileActiveBorder};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.iPad}px) {
    padding: 24px;
  };
`;

export const Title = styled.h4`
  margin: 0 0 24px;
  font-weight: bold;
  font-size: 24px;
  line-height: 1.21;
  letter-spacing: 0.05em;
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
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.secondaryText};

  @media(max-width: ${({ theme }) => theme.breakpoint.iPad}px) {
    font-size: 14px;
    line-height: 1.21;
    margin-bottom: 16px;
  };
`;

export const LinkContainer = styled.div`
  display: flex;
  margin-top: 8px;
`;

export const LinkLabel = styled(Description)`
  margin: 0 8px 0 0;
  min-width: 60px;

  @media(max-width: ${({ theme }) => theme.breakpoint.iPad}px) {
    min-width: 47px;
  };
`;

export const Link = styled.a`
  word-wrap: anywhere;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.mainBlue};
  text-decoration-line: underline;
  text-underline-offset: 3px;
  -webkit-text-decoration-color: ${({ theme }) => theme.color.linkUnderline};   
  text-decoration-color: ${({ theme }) => theme.color.linkUnderline};
  opacity: 0.8;
  transition: 0.3s linear;
  
  &:hover{
    opacity: 1;
    -webkit-text-decoration-color: ${({ theme }) => theme.color.linkUnderlineHover};
    text-decoration-color: ${({ theme }) => theme.color.linkUnderlineHover};
  };

  @media(max-width: ${({ theme }) => theme.breakpoint.iPad}px) {
    font-size: 14px;
    line-height: 1.21;
  };
`;