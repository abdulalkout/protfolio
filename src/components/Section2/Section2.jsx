import React from "react";
import "./Section2.css";

function Section2() {
  return (
    <>
      <div className="section-2">
        <div className="skills-container">
          <div className="skill-categories">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skills-list">
                <span>HTML5</span>
                <span>JavaScript - ES6</span>
                <span>CSS3</span>
                <span>Python</span>
                <span>C / C++</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Databases</h3>
              <div className="skills-list">
                <span>mySQL</span>
                <span>MongoDB</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Tools & Frameworks</h3>
              <div className="skills-list">
                <span>JQuery</span>
                <span>React</span>
                <span>Redux</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>Bootstrap</span>
                <span>Debugging Applications</span>
                <span>Git, GitHub</span>
                <span>AWS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
