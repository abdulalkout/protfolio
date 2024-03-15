import React from "react";
import "./Experience.css";
import { useState } from "react";
import oilandgas from "../../images/oilandgas.png";
import oilStatistics from "../../images/statistics.png";
import akt from "../../images/comics_mobile.png";
import akt2 from "../../images/comicsDisplay.png";
import akt3 from "../../images/signInPage.png";
import wireline from "../../images/Rigfloor.jpeg";
import wireline2 from "../../images/inTruck.jpg";

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
                      <p className="sectionIntro">
                        Abdul Alkout brings over five years of extensive
                        experience in engineering, transitioning from a senior
                        engineer role in the oil and gas industry to becoming a
                        proficient Software Developer. His journey included
                        completing a rigorous six-month hands-on program at Per
                        Scholas, where he honed his skills in HTML5, JavaScript
                        (ES6), CSS3, React, Node.js, Express, and MongoDB, among
                        others.
                      </p>
                      {/* <h4>Coding Projects</h4> */}
                      <div className="Software-div">
                        <h3>Wells and Rigs Management Website</h3>
                        <div className="imageDiv">
                          <p className="projectIntro">
                            Developed an innovative well-management full stack
                            project to Enhance the collaboration and
                            cross-functional communication among Rig managers
                            and stakeholders, resulted in streamlined daily
                            operations, providing a centralized platform for
                            efficient monitoring and management of well-related
                            activities
                            <i>
                              <a href="https://github.com/abdulalkout/operation_manager">
                                {"  "}Link
                              </a>
                            </i>
                          </p>
                          <img className="oilwebimg" src={oilandgas} alt="" />
                        </div>
                        <div className="imageDiv">
                          <img
                            className="oilwebimg"
                            src={oilStatistics}
                            alt=""
                          />
                          <p className="projectPoints">
                            ● Managed routes and implemented RESTful APIs
                            through HTTP requests on the backend. <br />
                            ● Implemented authentication and authorization
                            mechanisms, Using JSON Web Tokens (JWT) for user
                            authentication. Resulting in ensuring that only
                            authorized users could access protected resources,
                            enhancing overall system security and compliance
                            with industry standards. <br />
                            ● Implemented 3 full CRUD systems for users, Wells
                            and Rigs <br />
                            ● Overcame challenges related to data
                            synchronization and real-time updates, implementing
                            effective solutions to ensure accurate and timely
                            information for users <br />● Tech Used : React,
                            Express, Nodejs, MongoDb,
                          </p>
                        </div>
                      </div>
                      <br />
                      <hr />
                      <div className="Software-div">
                        <h3>AKT-Entertainment Website</h3>
                        <div className="imageDiv">
                          <p className="projectIntro2">
                            Furthermore, he contributed significantly to the AKT
                            Entertainment project, where he developed and
                            deployed a dynamic front-end application using
                            React. His expertise in React hooks, context, and
                            routing led to the creation of a seamless user
                            experience, demonstrating his commitment to
                            delivering high-quality and scalable solutions.
                            <i>
                              <a href="https://github.com/abdulalkout/operation_manager">
                                {"  "}Link
                              </a>
                            </i>
                            <br />
                            <br />
                            <i>
                              <a href="https://aktentertainment.netlify.app/">
                                Visit Website Link
                              </a>
                            </i>
                          </p>
                          <img className="oilwebimg" src={akt2} alt="" />
                        </div>
                        <div className="imageDiv">
                          <img className="oilwebimg" src={akt3} alt="" />
                          <p className="projectPoints">
                            ● Enhanced user experience with React hooks and
                            routes, ensuring the development of high-quality,
                            scalable, and maintainable React components <br />●
                            Implemented a mobile responsive design for seamless
                            navigation, applying Mobile first best practice to
                            ensure an optimal user experience <br /> ● Tech Used
                            : React, React Context, React Hooks, React Router,
                            JavaScript, HTML, and CSS
                          </p>
                        </div>
                      </div>
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
                    <div className="Software-div">
                      <h3>Oil and Gas Field</h3>
                      <div className="imageDiv">
                        <p className="wirelineIntro2">
                          <h4>
                            Senior Wireline Field Engineer (6/2021 - 6/2023):
                          </h4>
                          As a Senior Wireline Field Engineer, Abdul
                          demonstrated exceptional troubleshooting skills,
                          resolving a wide range of technical issues on rigs and
                          ensuring the seamless collection of high-quality data.
                          His collaborative approach with remote and onsite
                          teams led to improved efficiency and reduced downtime.
                          Abdul's innovative solutions, such as utilizing dual
                          backer for Modular Dynamics Tester (MDT) and executing
                          Tough Logging Condition (TLC) operations,
                          significantly contributed to successful operations and
                          comprehensive data acquisition for clients. With a
                          strong commitment to safety, Abdul produced over 75
                          safety impact reports annually, ensuring the
                          well-being of all crew members. Moreover, his
                          leadership skills were evident in successfully leading
                          projects representing over $8 million in billable
                          fees, utilizing SLB software tools for operation
                          management, tickets, reports, and data analysis.
                        </p>
                        <img className="oilFieldimg" src={wireline} alt="" />
                      </div>
                      <div className="imageDiv">
                        <img className="oilFieldimg" src={wireline2} alt="" />
                        <p className="wirelineIntro2">
                          <h4>Wireline Field Engineer (9/2018 - 7/2020):</h4>
                          Abdul's role as a Wireline Field Engineer involved
                          designing, planning, preparing, and executing Logging
                          and Open / Cased Hole operations at well-sites. His
                          achievements include obtaining Schlumberger Wireline
                          Engineering Certification and leading Rig and Field
                          Operations crews, ensuring compliance with safety
                          regulations and quality standards in diverse
                          environments, including land and offshore locations.
                          Abdul's proficiency in utilizing a wide range of tools
                          and technologies, such as nuclear, resistivity, sonic
                          scanner, acoustics, and imaging tools, contributed to
                          the success of various projects related to well
                          integrity, production logging, and more.
                        </p>
                      </div>
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
    </div>
  );
};

export default Experience;
