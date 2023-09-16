import Project from "../components/Project.js";
import styles from "../styles/ProjectsPage.module.css";
import styles2 from "../styles/App.module.css";
import Navbar from "../components/Navbar.js";
import { useMediaQuery } from "react-responsive";
import NoSsr from "../components/NoSsr";
import projects from "../public/projectData.json";

const ProjectsPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isNone = !(isMobile || isTablet || isDesktop)


  return (
    <div>
      <NoSsr>
        <div className={styles["grid-container"]}>
          {isMobile && (
            <div className={styles["gridCol-container"]}>
              <div className={styles.gridColSingle}>
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
            </div>
          )}
          {(isTablet || isNone) && (
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
          )}
          {isDesktop && (
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
        </div>
      </NoSsr>
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
  );
};

export default ProjectsPage;
