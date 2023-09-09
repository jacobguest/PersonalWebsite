import Project from "./Project";
import "./ProjectsPage.css";

import { useMediaQuery } from "react-responsive";

const ProjectsPage = () => {

  // create object to store title, and image of each project
  const projects = [
    {
      title: 'Photography Portfolio',
      image: 'photography.jpeg',
    },
    {
      title: 'Wordle in Java',
      image: 'wordle.jpg',
    },
  ];

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <div className="grid-container">
      {isMobile && (
        <div style={{ display: "flex", height: "100%", width: "100%" }}>
          <div className="gridColSingle">
            <Project project={projects[0]}/>
            <Project project={projects[0]}/>
            <Project project={projects[0]}/>
            <Project project={projects[0]}/>
            <Project project={projects[0]}/>
            <Project project={projects[0]}/>
            <Project project={projects[0]}/>
            <Project project={projects[0]}/>
          </div>
        </div>
      )}
      {isTablet && (
        <div style={{ display: "flex", height: "100%", width: "100%" }}>
          <div className="gridColDouble">
            <Project project={projects[0]}/>
            <Project project={projects[0]}/>
            <Project project={projects[0]}/>
            <Project project={projects[0]}/>
          </div>
          <div className="gridColDouble">
            <Project project={projects[0]}/>
            <Project project={projects[0]}/>
            <Project project={projects[0]}/>
            <Project project={projects[0]}/>
          </div>
        </div>
      )}
      {isDesktop && (
        <div style={{ display: "flex", height: "100%", width: "100%" }}>
          <div className="gridColTriple">
            <Project project={projects[0]}/>
            <Project project={projects[0]}/>
            <Project project={projects[0]}/>
            <Project project={projects[0]}/>
            <Project project={projects[0]}/>
            <Project project={projects[0]}/>
          </div>
          <div className="gridColTriple">
          <Project project={projects[0]}/>
            <Project project={projects[0]}/>
            <Project project={projects[0]}/>
            <Project project={projects[0]}/>
            <Project project={projects[0]}/>
            <Project project={projects[0]}/>
          </div>
          <div className="gridColTriple">
          <Project project={projects[0]}/>
            <Project project={projects[0]}/>
            <Project project={projects[0]}/>
            <Project project={projects[0]}/>
            <Project project={projects[0]}/>
            <Project project={projects[0]}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
