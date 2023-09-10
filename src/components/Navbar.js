import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const logoUrl = "logo2.png";
  return (
    <div className="navbar">
      <Link className="navbar-item-left" to="/"><img className="logo" src={logoUrl}/></Link>
      <Link className="navbar-item-right" to="/">Home</Link>
      <Link className="navbar-item-right" to="/projects">Projects</Link>
      <Link className="navbar-item-right" to="/projects">About</Link>
    </div>
  );
};

export default Navbar;
