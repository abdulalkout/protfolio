import React from "react";
import "../AboutMe/AboutMe.css";
import { useState } from "react";
import oil from "../../images/oil.jpg";
import codingproject from "../../images/uni.jpg";
import eeeCertificate from "../../images/EMU-EEE-Certificate.jpg";
import perShcolas from "../../images/perscholas software engineering.jpg";

interface HighlightState {
  software: boolean;
  wireline: boolean;
  oilAndGas: boolean;
  diverseExpertise: boolean;
  leadership: boolean;
  telecom: boolean;
  education: boolean;
}

const AboutMe: React.FC = () => {
  const [loading, setLoading] = useState<HighlightState>({
    diverseExpertise: false,
    software: false,
    wireline: false,
    oilAndGas: false,
    leadership: false,
    telecom: false,
    education: false,
  });

  const openSection = (section: string) => {
    switch (section) {
      case "software":
        setLoading({ ...loading, software: !loading.software });
        break;
      case "wireline":
        setLoading({ ...loading, wireline: !loading.wireline });
        break;
      case "diverseExpertise":
        setLoading({ ...loading, diverseExpertise: !loading.diverseExpertise });
        break;
      case "oilAndGas":
        setLoading({ ...loading, oilAndGas: !loading.oilAndGas });
        break;
      case "leadership":
        setLoading({ ...loading, leadership: !loading.leadership });
        break;
      case "telecom":
        setLoading({ ...loading, telecom: !loading.telecom });
        break;
      case "education":
        setLoading({ ...loading, education: !loading.education });
        break;
    }
  };

  return (
    <div>
      <div
        onClick={() => openSection("diverseExpertise")}
        className="section-2"
      >
        <div className="skills-container">
          <div className="skill-categories">
            <div className="skill-category">
              <h3>Innovative Engineer with Diverse Expertise</h3>
              {loading.diverseExpertise ? (
                <>
                  <div className="skills-list">
                    <p>
                      Abdul Alkout is an innovative engineer with six years of
                      diverse experience spanning across oil and gas, telecom,
                      and software engineering. He has demonstrated adaptability
                      and versatility in navigating different industries,
                      leveraging his expertise to drive impactful results.
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
      <div onClick={() => openSection("leadership")} className="section-2">
        <div className="skills-container">
          <div className="skill-categories">
            <div className="skill-category">
              <h3>Technical Proficiency and Leadership</h3>
              {loading.leadership ? (
                <>
                  <div className="skills-list">
                    <p>
                      Equipped with a robust skill set, Abdul excels in various
                      programming languages and databases including HTML5,
                      JavaScript - ES6, CSS3, SASS, Python, TypeScript, SQL, and
                      MongoDB. He is proficient in utilizing tools such as
                      React, Redux, Node.js, Express, and Bootstrap, among
                      others. His abilities extend beyond technical competence,
                      as he demonstrates strong leadership skills in steering
                      cross-functional teams towards success.
                    </p>
                    <img className="aboutPic" src={codingproject} alt="Abdul" />
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      <div onClick={() => openSection("oilAndGas")} className="section-2">
        <div className="skills-container">
          <div className="skill-categories">
            <div className="skill-category">
              <h3>Proven Track Record in Oil & Gas</h3>
              {loading.oilAndGas ? (
                <div className="skills-list">
                  <p>
                    During his tenure as a Senior Wireline Field Engineer at
                    Schlumberger in Tripoli, Libya, Abdul showcased his
                    problem-solving skills by troubleshooting and resolving
                    technical issues ranging from equipment repairs to data
                    collection optimizations. His innovative solutions, such as
                    utilizing dual backer for Modular Dynamics Tester (MDT) and
                    executing Tough Logging Condition (TLC) operations,
                    underscore his impact in the oil and gas sector.
                  </p>
                  <img className="aboutPic" src={oil} alt="Abdul" />
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      <div onClick={() => openSection("telecom")} className="section-2">
        <div className="skills-container">
          <div className="skill-categories">
            <div className="skill-category">
              <h3>Telecom Network Architecture Specialist</h3>
              {loading.telecom ? (
                <div className="skills-list">
                  <p>
                    Abdul's stint as an IP Solution and Sales Manager at Huawei
                    in Tripoli, Libya, highlights his expertise in planning and
                    implementing network architecture. He played a pivotal role
                    in enhancing customer Datacom networks by researching,
                    comparing, and presenting new solutions. His contributions
                    in upgrading the Local Telecommunications Network (LTT)
                    underscore his strategic approach towards network
                    infrastructure.
                  </p>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      <div onClick={() => openSection("wireline")} className="section-2">
        <div className="skills-container">
          <div className="skill-categories">
            <div className="skill-category">
              <h3>Excellence in Wireline Field Engineering</h3>
              {loading.wireline ? (
                <div className="skills-list">
                  <p>
                    Abdul's prior experience as a Wireline Field Engineer at
                    Schlumberger in Tripoli, Libya, solidified his expertise in
                    designing, planning, and executing Logging and Open / Cased
                    Hole operations at well-sites. He led Rig and Field
                    Operations crews, ensuring compliance with safety
                    regulations and quality standards. His achievements include
                    achieving Schlumberger Wireline Engineering Certification
                    and managing projects representing over $8 million in
                    billable fees.
                  </p>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      <div onClick={() => openSection("software")} className="section-2">
        <div className="skills-container">
          <div className="skill-categories">
            <div className="skill-category">
              <h3>Software Development Experience</h3>
              {loading.software ? (
                <div className="skills-list">
                  <p>
                    Transitioning into software engineering, Abdul completed the
                    Software Engineering Program at Per Scholas in Chicago, IL.
                    Through hands-on coding in HTML, JavaScript, CSS, React,
                    Node.js, Express, and MongoDB, he demonstrated his
                    proficiency in full-stack development. His notable project,
                    the Wells and Rigs Management Website, exemplifies his
                    ability to design and implement essential features using the
                    software SDLC.
                  </p>
                  <img className="aboutPic" src={perShcolas} alt="Abdul" />
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
      <div onClick={() => openSection("education")} className="section-2">
        <div className="skills-container">
          <div className="skill-categories">
            <div className="skill-category">
              <h3>Education and Coding Projects</h3>
              {loading.education ? (
                <div className="skills-list">
                  <p>
                    Abdul holds a Bachelor's Degree from the Eastern
                    Mediterranean University in Famagusta, Cyprus, with a focus
                    on Electrical and Electronic Engineering. Additionally, his
                    completion of the Software Engineering Program at Per
                    Scholas underscores his commitment to continuous learning
                    and professional development. His coding projects,
                    particularly the Wells and Rigs Management Website,
                    exemplify his capability in applying technical skills to
                    real-world solutions.
                  </p>
                  <img
                    className="aboutPic"
                    src={eeeCertificate}
                    alt="EEE-Certificate"
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
