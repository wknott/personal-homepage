import React from "react";
import { Description, Links, Link, LinkRow, LinkValue, Tile, Title } from "./styled";

const ProjectTile = ({ project }) => (
  <Tile>
    <Title>{project.name}</Title>
    <Description>{project.description}</Description>
    <Links>
      {!!project.homepage &&
        <LinkRow>
          <dt>Demo:</dt>
          <LinkValue>
            <Link
              href={project.homepage}
              target="_blank"
              rel="noreferrer"
            >
              {project.homepage}
            </Link>
          </LinkValue>
        </LinkRow>}
      <LinkRow>
        <dt>Code:</dt>
        <LinkValue>
          <Link
            href={project.html_url}
            target="_blank"
            rel="noreferrer"
          >
            {project.html_url}
          </Link>
        </LinkValue>
      </LinkRow>
    </Links>
  </Tile>
);

export default ProjectTile;