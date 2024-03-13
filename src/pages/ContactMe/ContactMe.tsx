import React from "react";
import "./ContactMe.css";

const ContactMe: React.FC = () => {
  return (
    <>
      <div className="section-2">
        <div className="skills-container">
          <div className="skill-categories">
            <div className="skill-category">
              <h3>Email</h3>
              <div className="skills-list">
                <span>Abdul.alkout@gmail.com</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>LinkedIn</h3>
              <div className="skills-list">
                <span>
                  Abdul Alkout{"  "}
                  <a
                    href="https://www.linkedin.com/in/abdul-alkout/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab linkedInLogo fa-linkedin"></i>
                  </a>
                </span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Phone number</h3>
              <div className="skills-list">
                <span>+1 773 997 4087</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Github</h3>
              <div className="skills-list">
                <span>
                  abdulalkout
                  {"  "}
                  <a
                    href="https://github.com/abdulalkout"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab linkedInLogo fa-github"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
