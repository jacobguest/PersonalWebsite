import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <div className="navigation"><Navbar></Navbar></div>
      <div className="content"></div>
    </div>
  );
}

export default App;
