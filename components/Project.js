import styles from "../styles/Project.module.css";
import Link from "next/link";

const Project = (props) => {
  const projectUrl = "/projects/" + props.project.id;
  const imageUrl = "thumbs/" + props.project.imageUrl;
  
  return (
    <Link href={projectUrl} className={styles["project-card"]}>
      <div className={styles["project-thumb"]}>
        <img
          src={imageUrl}
          alt={"project thumbnail"}
        />
      </div>
      <div className={styles["project-title"]}>{props.project.title}</div>
    </Link>
  );
};

export default Project;
