import React, { useEffect, useState } from "react";
import { getProjects } from "../../getProjects";
import { ProjectsContainer } from "./styled";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("initial");

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setStatus("loading");
        const projects = await getProjects();
        setStatus("success");
        setProjects(projects);
      } catch (error) {
        setStatus("error");
      }
    };

    loadProjects();
  }, []);

  switch (status) {
    case "error":
      return <h1>error</h1>;
    case "loading":
      return <h1>loading</h1>;
    default:
      return (
        <ProjectsContainer>
          {projects.map(project =>
            <li key={project.id}>{project.name}</li>
          )}
        </ProjectsContainer>
      );
  };
};

export default Projects;
