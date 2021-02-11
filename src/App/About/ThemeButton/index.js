import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme, toggleTheme } from "../../themeSlice";
import { Box, Button, Container, Icon, Text, IconWrapper } from "./styled";

const ThemeButton = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();

  return (
    <Container>
      <Button onClick={() => dispatch(toggleTheme())}>
        <Text>Dark mode {isDarkTheme ? "on" : "off"}</Text>
        <Box>
          <IconWrapper moveToRight={!isDarkTheme}>
            <Icon />
          </IconWrapper>
        </Box>
      </Button>
    </Container >
  );
}

export default ThemeButton;