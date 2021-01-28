import styled from "styled-components";


export default styled.img`
  grid-area: image;
  width: 384px;
  height: 384px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.background};
  transition: background-color 0.5s linear; 
  margin-right: 66px;
  flex-shrink: 0;

  @media(max-width: ${({ theme }) => theme.breakpoint.iPad}px) {
    width: 256px;
    height: 256px;
    margin-right: 48px;
  };

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 128px;
    height: 128px;
    margin-bottom: 16px;
    margin-top: 13px;
  };
`;