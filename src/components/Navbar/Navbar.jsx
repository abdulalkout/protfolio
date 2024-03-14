import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import logo from "../../images/me2.jpg";

// Rest of your React code...

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");
    const handleMediaQueryChange = () => {
      setMobileMenuOpen(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    setMobileMenuOpen(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="sticky-nav">
      <div className={`navbar ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
        <img className="logo" src={logo} alt="" />
        {/* <p className="logo">Welcome</p> */}
        <div className={`pageLinks ${isMobileMenuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-links">
            {isMobileMenuOpen ? <i className="fas fa-home"></i> : <h3>Home</h3>}
          </Link>
          <Link to="/about" className="nav-links">
            {isMobileMenuOpen ? (
              <i className="fas fa-info-circle"></i>
            ) : (
              <h3>About</h3>
            )}
          </Link>
          <Link to="/projects" className="nav-links">
            {isMobileMenuOpen ? (
              <i class="fa-solid fa-terminal"></i>
            ) : (
              <h3>Experience</h3>
            )}
          </Link>
          <Link to="/contact" className="nav-links">
            {isMobileMenuOpen ? (
              <i class="fa-solid fa-id-card-clip"></i>
            ) : (
              <h3>Contact me</h3>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
