import React from "react";
import { Description, Tile, Title } from "./styled";

const ProjectTile = ({ project }) => (
  <Tile>
    <Title>{project.name}</Title>
    <Description>{project.description}</Description>
  </Tile>
);

export default ProjectTile;