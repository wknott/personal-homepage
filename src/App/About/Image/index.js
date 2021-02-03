import styled from "styled-components";

export default styled.img`
  grid-area: image;
  width: 30vw;
  max-width: 384px;
  height: auto;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.background};
  transition: background-color 0.5s linear; 
  margin-right: 64px;


  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 128px;
    margin-bottom: 16px;
    margin-top: 13px;
  };
`;