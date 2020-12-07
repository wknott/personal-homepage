import styled from "styled-components";
import profilImage from "./profil-image.png";

export default styled.div`
  width: 384px;
  height: 384px;
  border-radius: 192px;
  background: url(${profilImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.color.background};
  transition: all 0.5s linear; 
  margin-right: 66px;
  flex-shrink: 0;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 128px;
    height: 128px;
    border-radius: 64px;
    margin-bottom: 16px;
  };
`;