import styles from "../styles/Project.module.css";
// import { Link } from "react-router-dom";
import Link from 'next/link';

const Project = (props) => {

  
  return (
    
    <Link href="/" className={styles['project-card']}>
      <div className={styles['project-thumb']}><img src={"thumbs/" + props.project.image} alt={'project thumbnail'}/></div>
      <div className={styles['project-title']}>{props.project.title}</div>
    </Link>
      // <Link className="project-card" to="/projects/photography">
      //   <div className="project-thumb"><img src={"thumbs/" + props.project.image} alt={"project thumbnail"}/></div>
      //   <div className="project-title">{props.project.title}</div>
      // </Link>
  );
};

export default Project;
