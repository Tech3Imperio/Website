import "./styles.css";
import React from "react";
import { Link } from "react-router-dom";
import { homeSliderH1 } from "../../../Assets";

export const AboutUs = () => {
  return (
    <div className="about-section paddings innerWidth">
      <h1 className="about-header PrimaryText">About Us!</h1>
      <div className="about-content">
        <div className="about-content-image value-image">
          <img src={homeSliderH1} alt="About Us" />
        </div>
        <div className="about-content-text">
          <h3 className="about-content-header SecondaryText Raleway">
            Rise Alloys
          </h3>
          <br />
          <p>
            Imperio Designs, established in 2011 with a vision to revolutionize
            spaces, intertwining safety with design excellence. With meticulous
            craftsmanship and unwavering commitment to quality, Imperio became
            the beacon of elegance in railing solutions.
          </p>

          <Link to="aboutus" className="home-about-redirect">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};
