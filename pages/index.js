import Navbar from "../components/Navbar.js";
// import Home from "../components/Home.js";
// import ProjectsPage from "../components/ProjectsPage.js";
// import Photography from '../components/Photography.js';
import styles from "../styles/App.module.css";
//import '../styles/globals.css';
// import Link from 'next/link';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.navigation}>
        <Navbar></Navbar>
      </div>
      <div className={styles.content}></div>
    </div>
  );
}

export default App;
