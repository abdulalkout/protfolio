import React from "react";
import "./Experience.css";
import { useState } from "react";

interface HighlightState {
  software: boolean;
  wireline: boolean;
}

const Experience: React.FC = () => {
  const [loading, setLoading] = useState<HighlightState>({
    software: false,
    wireline: false,
  });

  const openWirelineSection = () => {
    setLoading({ ...loading, wireline: !loading.wireline });
  };
  const openSoftwareSection = () => {
    setLoading({ ...loading, software: !loading.software });
  };

  return (
    <div className="experiencePadeDiv">
      <h2 className="text-3xl font-bold exHeader">Abdul's Experience</h2>
      <div onClick={openSoftwareSection} className="section-2">
        <div className="skills-container exSection">
          <div className="skill-categories">
            <div className="skill-category">
              <h3>Software Engineering Expertise</h3>
              <div className="skills-list">
                {loading.software ? (
                  <>
                    <div className="software-Experience">
                      {/* <h4>Software Engineering Summary</h4> */}
                      <p>
                        Abdul Alkout brings over five years of extensive
                        experience in engineering, transitioning from a senior
                        engineer role in the oil and gas industry to becoming a
                        proficient Software Developer. His journey included
                        completing a rigorous six-month hands-on program at Per
                        Scholas, where he honed his skills in HTML5, JavaScript
                        (ES6), CSS3, React, Node.js, Express, and MongoDB, among
                        others.
                      </p>
                      <h4>Coding Projects</h4>
                      <p>
                        One of his notable projects during the Per Scholas
                        program was the development of a Wells and Rigs
                        Management Website. This full-stack project demonstrated
                        his ability to independently design and implement
                        essential features using the software SDLC, resulting in
                        enhanced functionality and optimized performance. Abdul
                        excelled in managing routes, implementing RESTful APIs,
                        and overcoming challenges related to data
                        synchronization and real-time updates.
                      </p>
                      <p>
                        Furthermore, he contributed significantly to the AKT
                        Entertainment project, where he developed and deployed a
                        dynamic front-end application using React. His expertise
                        in React hooks, context, and routing led to the creation
                        of a seamless user experience, demonstrating his
                        commitment to delivering high-quality and scalable
                        solutions.
                      </p>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div onClick={openWirelineSection} className="section-2">
        <div className="skills-container exSection">
          <div className="skill-categories">
            <div className="skill-category">
              <h3>Wireline Engineering Expertise</h3>
              <div className="skills-list">
                {loading.wireline ? (
                  <>
                    <p>
                      Abdul Alkout is an innovative engineer with six years of
                      diverse experience spanning across oil and gas, telecom,
                      and software engineering. He has demonstrated adaptability
                      and versatility in navigating different industries,
                      leveraging his expertise to drive impactful results.
                    </p>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
