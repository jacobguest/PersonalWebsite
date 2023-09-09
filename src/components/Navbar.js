import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar-item" to="/">Home</Link>
      <Link className="navbar-item" to="/projects">Projects</Link>
    </div>
  );
};

export default Navbar;
