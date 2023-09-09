import Project from "./Project";
import "./Projects.css";

import { useMediaQuery } from "react-responsive";

const Projects = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <div className="grid-container">
      {isMobile && (
        <div style={{ display: "flex", height: "100%", width: "100%" }}>
          <div className="gridColSingle">
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
        </div>
      )}
      {isTablet && (
        <div style={{ display: "flex", height: "100%", width: "100%" }}>
          <div className="gridColDouble">
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
          </div>
        </div>
      )}
      {isDesktop && (
        <div style={{ display: "flex", height: "100%", width: "100%" }}>
          <div className="gridColTriple">
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
          <div className="gridColTriple">
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
          <div className="gridColTriple">
            <Project />
            <Project />
            <Project />
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
