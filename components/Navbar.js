import styles from "../styles/Navbar.module.css";
import Link from 'next/link';

const Navbar = () => {

  const logoUrl = "/logo2.png";
  
  return (
    <div className={styles.navbar}> 
      <div className={styles['navbar-margin']}>
      <div className={styles['left-links']}>
        <Link href="/" className={styles['navbar-item-left']} ><img alt="JG logo" className={styles.logo} src={logoUrl}/></Link>
      </div>
      <div className={styles['right-links']}>
        <Link className={styles['navbar-item-right']} href="/">Home</Link>
        <Link className={styles['navbar-item-right']} href="/projectspage">Projects</Link>
        <Link className={styles['navbar-item-right']} href="/">About</Link>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
