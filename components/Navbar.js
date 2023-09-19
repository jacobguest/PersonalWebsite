import styles from "../styles/Navbar.module.css";
import Link from 'next/link';
import { useMediaQuery } from "react-responsive";

const Navbar = () => {

  const logoUrl = "/logo2.png";
  
  const isDesktop = useMediaQuery({ minWidth: 600 });

  return (
    <div className={styles.navbar}> 
      <div className={styles['navbar-margin']}>
      <div className={styles['left-links']}>
        <Link href="/" className={styles['navbar-item-left']} ><img alt="JG logo" className={styles.logo} src={logoUrl}/></Link>
      </div>
      <div className={isDesktop ? styles['show-desktop'] : styles['hide-desktop']}>
        <div className={styles['right-links-desktop']}>
          <Link className={styles['navbar-item-right']} href="/">Home</Link>
          <Link className={styles['navbar-item-right']} href="/projectspage">Projects</Link>
          <Link className={styles['navbar-item-right']} href="/about">About</Link>
        </div>
      </div>
      <div className={isDesktop ? styles['hide-desktop'] : styles['show-desktop']}>
        <div className={styles['right-links-mobile']}>
          <Link className={styles['navbar-item-right']} href="/">Home</Link>
          <Link className={styles['navbar-item-right']} href="/projectspage">Projects</Link>
          <Link className={styles['navbar-item-right']} href="/about">About</Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
