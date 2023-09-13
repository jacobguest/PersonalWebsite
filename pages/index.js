import styles from '../styles/App.module.css';


const checkoutButton = "Explore My Work";
function App() {
  return (
    <div className={styles['home-container']}>
      <h1>Hello! I'm Jacob Guest.</h1>
      <h2>I am a final year Computer Science student at The University of Leeds and an aspiring software engineer, passionate about technology and problem solving.</h2>
      <div className={styles['checkout-box']}>{checkoutButton}</div>
    </div>
  );
}

export default App;
