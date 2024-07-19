import { Link } from "react-router-dom";
import "./mainnav.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <div className="navbar-logo-container">
              <img
                className="navbar-logo"
                src="/src/assets/cclogos.png"
                alt="Your Company"
              />
            </div>
            <div className="navbar-links">
              <Link className="navbar-link" aria-current="page" to="home">
                Home
              </Link>
              <Link className="navbar-link" aria-current="page" to="about">
                About
              </Link>
              <Link className="navbar-link" aria-current="page" to="contact">
                Contact Us
              </Link>
              <Link className="navbar-link" aria-current="page" to="">
                Jobs
              </Link>
              <Link className="navbar-link" aria-current="page" to="login">
                Login
              </Link>
              <Link className="navbar-link" aria-current="page" to="alogin">
                AdminLogin
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
