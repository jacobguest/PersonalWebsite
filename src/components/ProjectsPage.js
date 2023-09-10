import Project from "./Project";
import "./ProjectsPage.css";

import { useMediaQuery } from "react-responsive";

const ProjectsPage = () => {
  // create object to store title, and image of each project
  // should put this in another file somehow (json file maybe)
  const projects = [
    {
      title: "Photography Portfolio",
      image: "project-photography.png",
    },
    {
      title: "Sports Centre Booking System",
      image: "yellow.png",
    },
    {
      title: "Network Programming",
      image: "blue.png",
    },
    {
      title: "PGM Tools",
      image: "dpink.png",
    },
    {
      title: "Web Tech",
      image: "dpurple.png",
    },
    {
      title: "AI 1",
      image: "green.png",
    },
    {
      title: "AI 2",
      image: "lpink.png",
    },
    {
      title: "Data Mining",
      image: "lpurple.png",
    },
    {
      title: "User Interfaces Qt",
      image: "orange.png",
    },
  ];

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const projectGroupsTriple = [];
  for (let i = 0; i < 9; i += 3) {
    const projectGroupTriple = projects
      .slice(i, i + 3)
      .map((project, index) => <Project key={index} project={project} />);
    projectGroupsTriple.push(
      <div key={i} className="gridColTriple">
        {projectGroupTriple}
      </div>
    );
  }

  const projectGroupsDouble = [];
  for (let i = 0; i < 8; i += 4) {
    const projectGroupDouble = projects
      .slice(i, i + 4)
      .map((project, index) => <Project key={index} project={project} />);
    projectGroupsDouble.push(
      <div key={i} className="gridColDouble">
        {projectGroupDouble}
      </div>
    );
  }

  const projectGroupsSingle = [];
  projectGroupsSingle.push(
    <div className="gridColSingle">
      {projects.map((project, index) => (
        <Project project={project} />
      ))}
    </div>
  );

  return (
    <div className="grid-container">
      {isMobile && (
        <div className="gridCol-container">{projectGroupsSingle}</div>
      )}
      {isTablet && (
        <div className="gridCol-container">{projectGroupsDouble}</div>
      )}
      {isDesktop && (
        <div className="gridCol-container">{projectGroupsTriple}</div>
      )}
    </div>
  );
};

export default ProjectsPage;
