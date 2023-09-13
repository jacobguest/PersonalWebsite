import { useRouter } from "next/router";
import Data from "../../public/projectData.json";
import styles from "../../styles/AboutProject.module.css";

const Proj = ({ params }) => {

  const router = useRouter();
  const project = Data.find((project) => project.id === router.query.projectId);
  if (!project) {
    return <div className={styles["about-project-loading"]}>Loading...</div>;
  }

  const imageUrl = "../thumbs/" + project.imageUrl;

  return (
    <div className={styles["about-project"]}>
      <h1>{project.title}</h1>
      <div className={styles['screenshot-container']}>
        <img className={styles['screenshot']} src={imageUrl} />
      </div>
      <h2>About this project</h2>
      <p>{project.description}</p>
      <h2>Tech used</h2>
      <p>{project.techUsed}</p>
    </div>
  );
};

// export async function getStaticPaths() {
//     // return list of pos vals for id
// };

// export async function getStaticProps ({ params }) {
//     // fetch data for project using params.id
// };

export default Proj;
