import React from "react";
import "./Footer.css"; // Create a new CSS file for styling if needed

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Abdul Protfolio.</p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/abdul-alkout/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/abdulalkout"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
