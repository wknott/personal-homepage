import React from "react";
import { Description, Link, LinkContainer, LinkLabel, Tile, Title } from "./styled";

const ProjectTile = ({ project }) => (
  <Tile>
    <Title>{project.name}</Title>
    <Description>{project.description}</Description>
    {project.homepage &&
      <LinkContainer>
        <LinkLabel>Demo:</LinkLabel>
        <Link
          href={project.homepage}
          target="_blank"
        >
          {project.homepage}
        </Link>
      </LinkContainer>}
    <LinkContainer>
      <LinkLabel>Code:</LinkLabel>
      <Link
        href={project.html_url}
        target="_blank"
      >
        {project.html_url}
      </Link>
    </LinkContainer>
  </Tile>
);

export default ProjectTile;