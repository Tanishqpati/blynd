import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { ReactComponent as Hamburger } from '../../assets/icons8-menu.svg'
// import { ReactComponent as Brand } from '../../assets/image 2.svg'
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src="/assets/image2.jpg" alt="" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src="/assets/icons8-menu.svg" alt="" />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            {/* <li>
              <NavLink to="/">Home</NavLink>
            </li> */}
            <li>
              <NavLink to="/learn">Learn</NavLink>
            </li>
            <li>
              <NavLink to="/safety">Safety</NavLink>
            </li>
            <li>
              <NavLink to="/support">Support</NavLink>
            </li>
            <li>
              <button id="signin" onClick={() => navigate("/login")}>
                Sign in
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
