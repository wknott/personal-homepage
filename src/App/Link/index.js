import styled from "styled-components";

export default styled.a`
  background-color: ${({ theme }) => theme.color.mainBlue};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  font-weight: 600;
  font-size: 20.0584px;
  line-height: 1.2;
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  cursor: pointer; 
  width: max-content;
  text-decoration: none;
  transition: 0.3s linear;
  
  &:hover{
    box-shadow: 
    2px -2px 0px ${({ theme }) => theme.color.blueShadow}, 
    -2px 2px 0px${({ theme }) => theme.color.blueShadow}, 
    2px 2px 0px ${({ theme }) => theme.color.blueShadow}, 
    -2px -2px 0px ${({ theme }) => theme.color.blueShadow};
  }

  &:focus{
    box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
    outline: none;
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
    line-height: 1.22;
  };
`;
