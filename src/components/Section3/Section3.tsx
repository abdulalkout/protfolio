import React, { useRef, useState } from "react";
import "./Section3.css"; // Create a new CSS file for styling if needed

interface HighlightState {
  electrical: boolean;
  oil: boolean;
  software: boolean;
}

const Section3: React.FC = () => {
  const [highlight, setHighlight] = useState<HighlightState>({
    electrical: false,
    oil: false,
    software: true,
  });

  // Function to scroll to a specific card
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  return (
    <div className="section-3">
      <h2>Education</h2>
      <div className="education-cards">
        {/* Card 1: Electrical and Electronic Degree */}
        <div
          className={
            highlight.electrical
              ? "education-card highlighted"
              : "education-card"
          }
          onClick={() => {
            setHighlight({
              ...highlight,
              oil: false,
              software: false,
              electrical: true,
            });
          }}
        >
          <h3>Electrical and Electronic Degree</h3>
          <p>Eastern Mediterranean University - Famagusta, Cyprus</p>
          <p>Completed 1/2018</p>
        </div>

        {/* Card 2: Software Engineering */}
        <div
          className={
            highlight.software ? "education-card highlighted" : "education-card"
          }
          onClick={() => {
            setHighlight({
              ...highlight,
              oil: false,
              software: true,
              electrical: false,
            });
          }}
        >
          <h3>Software Engineering Program</h3>
          <p>Per Scholas – Chicago, IL</p>
          <p>Graduated 1/2024</p>
        </div>

        {/* Card 3: Oil & Gas Certificate in Wireline Field Engineering */}
        <div
          className={
            highlight.oil ? "education-card highlighted" : "education-card"
          }
          onClick={() => {
            setHighlight({
              ...highlight,
              oil: true,
              software: false,
              electrical: false,
            });
          }}
        >
          <h3>Oil & Gas Wireline Certificate</h3>
          <p>Schlumberger Wireline Engineering Certification - France</p>
          <p>Completed 11/2018</p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
