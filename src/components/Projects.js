import Project from "./Project";
import "./Projects.css";

const Projects = () => {
  // media query where if certain size: use conditional for two column, whereas if certain size use 3 column.
  return (
    <div className="grid-container">
      <div className="gridCol">
        <Project />
        <Project />
        <Project />
      </div>
      <div className="gridCol">
        <Project />
        <Project />
        <Project />
      </div>
      <div className="gridCol">
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default Projects;
