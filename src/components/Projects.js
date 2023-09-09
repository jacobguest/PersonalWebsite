import Project from "./Project";
import "./Projects.css";

import { useMediaQuery } from "react-responsive";

const Projects = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Example: screens smaller than 768px
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <div className="grid-container">
      {isMobile && <div style={{display: 'flex',height: '100%', width: '100%'}}><div className="gridColDouble">
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
          <div className="gridColDouble">
            <Project />
            <Project />
            <Project />
            <Project />
          </div></div>}
      {isDesktop && (
        <div style={{display: 'flex',height: '100%', width: '100%'}}>
          <div className="gridColTriple">
            <Project />
            <Project />
            <Project />
          </div>
          <div className="gridColTriple">
            <Project />
            <Project />
            <Project />
          </div>
          <div className="gridColTriple">
            <Project />
            <Project />
            <Project />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
