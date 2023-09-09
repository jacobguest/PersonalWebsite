import "./Project.css";
import { Link } from "react-router-dom";

const Project = (props) => {

  console.log(props.project.image);
  return (
      <Link className="project-card" to="/projects/photography">
        <div className="project-thumb"><img src={"thumbs/" + props.project.image} alt={"project thumbnail"}/></div>
        <div className="project-title">{props.project.title}</div>
      </Link>
  );
};

export default Project;
