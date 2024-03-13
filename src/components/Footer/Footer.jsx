import React from "react";
import "./Footer.css"; // Create a new CSS file for styling if needed

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Abdul Protfolio. All rights reserved.</p>
        <div className="social-icons">
          {/* Add your social media icons or links here */}
          {/* Example: */}
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
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
