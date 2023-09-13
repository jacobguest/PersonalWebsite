import Navbar from './Navbar.js';
import styles from '../styles/App.module.css';
 
export default function Layout({ children }) {
  return (
    <>
      <div className={styles.app}>
      <div className={styles.navigation}>
        <Navbar></Navbar>
      </div>
      <div className={styles.content}><main>{children}</main></div>
    </div>
    </>
  )
}