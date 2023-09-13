import { useRouter } from 'next/router';
import Data from '../../public/projectData.json';
import styles from "../../styles/AboutProject.module.css";

const Proj = ({params}) => {

    const router = useRouter();
    
    
    return (
         <div className={styles["about-project"]}>
      <h1>Personal Portfolio</h1>
      <div>
        <img />
      </div>
      <h2>About this project</h2>
      <p>Showcase images</p>
      <h2>Tech used</h2>
      <p>React, AWS Amplify, S3</p>
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