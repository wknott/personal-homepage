import React from "react";
import { Bullet, ListItem, StyledList } from "./styled";

const List = ({ items }) => {
  return (
    <StyledList>
      {items.map(item =>
        <ListItem key={item}>
          <Bullet />{item}
        </ListItem>
      )}
    </StyledList>
  );
};

export default List;