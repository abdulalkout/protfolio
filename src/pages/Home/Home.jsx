import React from "react";
import "./Home.css";
import homeMe from "../../images/coding.jpg";
import Section2 from "../../components/Section2/Section2.tsx";
import Section3 from "../../components/Section3/Section3.tsx";

function Home() {
  return (
    <>
      <div className="section-1">
        <div className="my-name">
          <p className="summery">Hi, I am</p>
          <h3 className="my-name"> Abdul Alkout</h3>
          <p className="summery">
            Your friendly neighborhood engineer turned software enthusiast,
            crafting digital solutions with passion and precision. I thrive on
            turning complex challenges into elegant, user-centric experiences.
            Let's build something amazing together!
          </p>
        </div>
        <img className="myPic" src={homeMe} alt="myPic" />
      </div>
      <hr />
      <br />
      <Section2 />
      <br />
      <br />
      <Section3 />
    </>
  );
}

export default Home;
