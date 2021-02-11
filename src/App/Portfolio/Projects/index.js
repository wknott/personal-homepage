import React, { useEffect, useState } from "react";
import Error from "./Error";
import Loading from "./Loading";
import ProjectTile from "./ProjectTile";
import { ProjectsContainer } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, selectProjects, selectStatus } from "./projectsSlice";

const Projects = () => {
  const projects = useSelector(selectProjects);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  switch (status) {
    case "initial":
      return <></>
    case "error":
      return <Error />;
    case "loading":
      return <Loading />
    default:
      return (
        <ProjectsContainer>
          {projects.map(project =>
            <ProjectTile key={project.id} project={project} />
          )}
        </ProjectsContainer>
      );
  };
};

export default Projects;
