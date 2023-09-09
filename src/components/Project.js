import "./Project.css";
import { Outlet, Link } from "react-router-dom";

const Project = (props) => {
  return (
      <Link className="project-card" to="/projects/photography">
        <div className="project-thumb">box</div>
        <div className="project-title">{props.project.title}</div>
      </Link>
  );
};

export default Project;
