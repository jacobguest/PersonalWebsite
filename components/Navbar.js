import styles from "../styles/Navbar.module.css";
// import { Link } from 'react-router-dom';
import Link from 'next/link';

const Navbar = () => {

  const logoUrl = "logo2.png";
  return (
    <div className={styles.navbar}>
      
      <Link href="/" className={styles['navbar-item-left']} ><img alt="JG logo" className={styles.logo} src={logoUrl}/></Link>
      <Link className={styles['navbar-item-right']} href="/">Home</Link>
      <Link className={styles['navbar-item-right']} href="/projectspage">Projects</Link>
      <Link className={styles['navbar-item-right']} href="/">About</Link>
      {/* <Link className="navbar-item-left" to="/"><img alt="JG logo" className="logo" src={logoUrl}/></Link>
      <Link className="navbar-item-right" to="/">Home</Link>
      <Link className="navbar-item-right" to="/projects">Projects</Link>
      <Link className="navbar-item-right" to="/projects">About</Link> */}
    </div>
  );
};

export default Navbar;
