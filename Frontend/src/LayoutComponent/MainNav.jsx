import { Link } from "react-router-dom";
import "./mainnav.css";
const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-9 py-4 sm:px-6 lg:px-8 scale-110">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-around">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="navbar-logo"
                src="/src/assets/cclogos.png"
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  className="navbar-link"
                  aria-current="page"
                  to="home"
                >
                  Home
                </Link>
                <Link
                  className="navbar-link"
                  aria-current="page"
                  to="about"
                >
                  About
                </Link>
                <Link
                  className="navbar-link"
                  aria-current="page"
                  to="contact"
                >
                  Contact Us
                </Link>
                <Link
                  className="navbar-link"
                  aria-current="page"
                  to=""
                >
                  Jobs
                </Link>
                <Link
                  className="navbar-link"
                  aria-current="page"
                  to="login"
                >
                  Login
                </Link>
                <Link
                  className="navbar-link"
                  aria-current="page"
                  to="alogin"
                >
                  AdminLogin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
