import React, { useContext } from "react";
import { Wrapper, Subtitle, Icon } from "./styled";
import spinner from "./spinner.svg";
import spinnerDark from "./spinner-dark.svg";
import { ThemeContext } from 'styled-components';

const Loading = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Wrapper>
      <Subtitle>
        Please wait, projects are being loaded…
      </Subtitle>
      <Icon src={themeContext.color.body === "#FBFBFE" ? spinner : spinnerDark} />
    </Wrapper>
  );
};

export default Loading;