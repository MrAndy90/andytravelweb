import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import cv from "./Andy_CV_UK.pdf";
import dwl from "./download.svg";
import "./button1.css";

function HeroSection() {
  return (
    <div className="hero-container home">
      <h1>
        Looking <br />
        for a <br />
        REACT <br />
        Developer?
      </h1>
      <button>What are you waiting for?</button>
      <div className="btncont">
        <button className="custom-btn btn-12">
          <span>3 CV's FR-NL-EN</span>

          <span>
            <img className="dwl" src={dwl} alt="" />
            Download CV
          </span>
        </button>
      </div>
      <div className="hero-btns"></div>

      <div id="ppic"></div>
      <script></script>
    </div>
  );
}

export default HeroSection;
