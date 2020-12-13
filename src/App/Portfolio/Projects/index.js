import React, { useEffect, useState } from "react";
import { getProjects } from "../../getProjects";
import Error from "./Error";
import Loading from "./Loading";
import ProjectTile from "./ProjectTile";
import { ProjectsContainer } from "./styled";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("initial");

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setStatus("loading");
        const projects = await getProjects();
        setStatus("error");
        setProjects(projects);
      } catch (error) {
        setStatus("error");
      }
    };

    loadProjects();
  }, []);

  switch (status) {
    case "error":
      return <Error />;
    case "loading":
      return <Loading />;
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
