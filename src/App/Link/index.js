import styled from "styled-components";

export default styled.a`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.link.text};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  cursor: pointer; 
  text-decoration: none;
  transition: 0.3s linear;
  
  &:hover{
    box-shadow: 
    2px -2px 0 ${({ theme }) => theme.color.link.shadow}, 
    -2px 2px 0${({ theme }) => theme.color.link.shadow}, 
    2px 2px 0 ${({ theme }) => theme.color.link.shadow}, 
    -2px -2px 0 ${({ theme }) => theme.color.link.shadow};
  }

  &:focus{
    box-shadow: inset 0 2px 0 rgba(20, 70, 32, 0.2);
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
    line-height: 1.22;
  };
`;
