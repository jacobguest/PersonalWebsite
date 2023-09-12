import Project from "../components/Project.js";
import styles from "../styles/ProjectsPage.module.css";
import styles2 from "../styles/App.module.css";
import Navbar from "../components/Navbar.js";
import { useMediaQuery } from "react-responsive";
import NoSsr from '../components/NoSsr';

const ProjectsPage = () => {
  // create object to store title, and image of each project
  // should put this in another file somehow (json file maybe)
  const projects = [
    {
      title: "Photography Portfolio",
      image: "project-photography.png",
    },
    {
      title: "Sports Centre Booking System",
      image: "yellow.png",
    },
    {
      title: "Network Programming",
      image: "blue.png",
    },
    {
      title: "PGM Tools",
      image: "dpink.png",
    },
    {
      title: "Web Tech",
      image: "dpurple.png",
    },
    {
      title: "AI 1",
      image: "green.png",
    },
    {
      title: "AI 2",
      image: "lpink.png",
    },
    {
      title: "Data Mining",
      image: "lpurple.png",
    },
    {
      title: "User Interfaces Qt",
      image: "orange.png",
    },
  ];

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const projectGroupsTriple = [];
  for (let i = 0; i < 9; i += 3) {
    const projectGroupTriple = projects
      .slice(i, i + 3)
      .map((project, index) => (
        <Project key={"one" + index} project={project} />
      ));
    projectGroupsTriple.push(
      <div key={i} className={styles.gridColTriple}>
        {projectGroupTriple}
      </div>
    );
  }

  const projectGroupsDouble = [];
  for (let i = 0; i < 8; i += 4) {
    const projectGroupDouble = projects
      .slice(i, i + 4)
      .map((project, index) => (
        <Project key={"two" + index} project={project} />
      ));
    projectGroupsDouble.push(
      <div key={i} className={styles.gridColDouble}>
        {projectGroupDouble}
      </div>
    );
  }

  const projectGroupsSingle = [];
  projectGroupsSingle.push(
    <div className={styles.gridColSingle}>
      {projects.map((project, index) => (
        <Project project={project} key={"three" + index} />
      ))}
    </div>
  );

  return (
    <div className={styles2.app}>
      <div className={styles2.navigation}>
        <Navbar></Navbar>
      </div>
      <div className={styles2.content}>
        <NoSsr>
        <div className={styles['grid-container']}>
      {isMobile && (
        <div className={styles['gridCol-container']}>{projectGroupsSingle}</div>
      )}
      {isTablet && (
        <div className={styles['gridCol-container']}>{projectGroupsDouble}</div>
      )}
      {isDesktop && (
        <div className={styles['gridCol-container']}>{projectGroupsTriple}</div>
      )}
    </div></NoSsr>
      {/* <div className={styles['grid-container']}>
          <div className={styles['mobile-layout']}>
            <div className={styles['gridCol-container-mob']}>{projectGroupsSingle}</div>
          </div>
          <div className={styles['tablet-layout']}>
            <div className={styles['gridCol-container-tab']}>{projectGroupsDouble}</div>
          </div>
          <div className={styles['desktop-layout']}>
          <div className={styles['gridCol-container-desk']}>{projectGroupsTriple}</div>
          </div>
      </div> */}

        {/* <div className={styles["grid-container"]}>
          { {isMobile && (
            <div className={styles["gridCol-container"]}>
              <Project project={projects[0]} />
              <Project project={projects[1]} />
              <Project project={projects[2]} />
              <Project project={projects[3]} />
              <Project project={projects[4]} />
              <Project project={projects[5]} />
              <Project project={projects[6]} />
              <Project project={projects[7]} />
              <Project project={projects[8]} />
            </div>
          )}
          {isTablet && (
            <div className={styles["gridCol-container"]}>
              <div className={styles.gridColDouble}>
                <Project project={projects[0]} />
                <Project project={projects[1]} />
                <Project project={projects[2]} />
                <Project project={projects[3]} />
              </div>
              <div className={styles.gridColDouble}>
                <Project project={projects[4]} />
                <Project project={projects[5]} />
                <Project project={projects[6]} />
                <Project project={projects[7]} />
              </div>
            </div>
          )} }
          { {isDesktop && ( }
            <div className={styles["gridCol-container"]}>
              <div className={styles.gridColTriple}>
                <Project project={projects[0]} />
                <Project project={projects[1]} />
                <Project project={projects[2]} />
              </div>
              <div className={styles.gridColTriple}>
                <Project project={projects[3]} />
                <Project project={projects[4]} />
                <Project project={projects[5]} />
                
              </div>
              <div className={styles.gridColTriple}>
                <Project project={projects[6]} />
                <Project project={projects[7]} />
                <Project project={projects[8]} />
                
              </div>
            </div>
           )} 
        </div> */}
      </div>
    </div>
  );
};

export default ProjectsPage;
