import React from "react";
import { Description, Link, LinkContainer, LinkLabel, Tile, Title } from "./styled";

const ProjectTile = ({ project }) => (
  <Tile>
    <Title>{project.name}</Title>
    <Description>{project.description}</Description>
    {project.has_pages &&
      <LinkContainer>
        <LinkLabel>Demo:</LinkLabel>
        <Link
          href={`https://wknott.github.io/${project.name}`}
          target="_blank"
        >
          {`https://wknott.github.io/${project.name}`}
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