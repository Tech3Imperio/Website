import React from "react";
import { imageSlider } from "../../@assets/image";
import "./styles.css";

export const AboutUs = () => {
  return (
    <div className="about-section">
      <h1 className="about-header PrimaryText">About Us!</h1>
      <div className="about-content">
        <div className="about-content-image">
          <img src={imageSlider[0][0]} alt="About Us" />
        </div>
        <div className="about-content-text">
          <h3 className="about-content-header SecondaryText">
            Imperio Railing System
          </h3>
          <br />
          <p>
            Imperio Designs, established in 2011 with a vision to revolutionize
            spaces, intertwining safety with design excellence. With meticulous
            craftsmanship and unwavering commitment to quality, Imperio became
            the beacon of elegance in railing solutions.
          </p>
        </div>
      </div>
    </div>
  );
};
