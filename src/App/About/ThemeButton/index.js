import React from "react";
import { Box, Button, Container, Icon, Text, IconWrapper } from "./styled";

const ThemeButton = ({ theme, toggleTheme }) => (
  <Container>
    <Button onClick={toggleTheme}>
      <Text>Dark mode {theme === "light" ? "off" : "on"}</Text>
      <Box>
        <IconWrapper moveToRight={theme === "light"}>
          <Icon />
        </IconWrapper>
      </Box>
    </Button>
  </Container >
);

export default ThemeButton;