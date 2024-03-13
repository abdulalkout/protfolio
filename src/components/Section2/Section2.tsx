import React from "react";
import "./Section2.css";

const Section2: React.FC = () => {
  return (
    <>
      <div className="header">
        <h2> Software Technical Skills</h2>
      </div>
      <div className="section-2">
        <div className="skills-container">
          <div className="skill-categories">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skills-list">
                <span>HTML5</span>
                <span>JavaScript - ES6</span>
                <span>TypeScript</span>
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
                <span>Flutter</span>
                <span>Bootstrap</span>
                <span>Debugging Applications</span>
                <span>Git, GitHub</span>
                <span>AWS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header">
        <h2>Wireline Technical Skills</h2>
      </div>
      <div className="section-2">
        <div className="skills-container">
          <div className="skill-categories">
            <div className="skill-category">
              <h3>SLB Open-Hole Wireline Tools</h3>
              <div className="skills-list">
                <span>APS</span>
                <span>ECS</span>
                <span>HGNS-CNL</span>
                <span>HNGS</span>
                <span>GR-PPC-EMS</span>
                <span>HALS</span>
                <span>HRLA-AIT</span>
                <span>MCFL</span>
                <span>BHC-MSIP-DSI</span>
                <span>FMI-OBMI-GPIT</span>
                <span>CMR</span>
                <span>VSI</span>
                <span>MDT-XPT</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>SLB Cased-Hole Wireline Tools</h3>
              <div className="skills-list">
                <span>USIT-CBL-VDL</span>
                <span>Bridge plug</span>
                <span>TCP correlation</span>
                <span>PLT</span>
                <span>RST</span>
                <span>HSD's</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header">
        <h2>Soft Skills</h2>
      </div>
      <div className="section-2">
        <div className="skills-container">
          <div className="skill-categories">
            <div className="skill-category">
              <h3>Abilities</h3>
              <div className="skills-list">
                <span>Code Reviews</span>
                <span>Critical-thinking</span>
                <span>strategic technical</span>
                <span>solutions</span>
                <span>Problem-Solving</span>
                <span>Decision-Making</span>
                <span>analytical</span>
                <span>skills</span>
                <span>Learning Quickly</span>
                <span>Communication</span>
                <span>Leadership</span>
                <span>Adaptability</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Bilingual</h3>
              <div className="skills-list">
                <span>English</span>
                <span>Arabic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
