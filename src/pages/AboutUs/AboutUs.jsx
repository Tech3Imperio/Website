import "./styles.css";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { imageAbout } from "../@assets/image";
import {
  FaUserCog,
  FaBalanceScale,
  FaLightbulb,
  FaWrench,
  FaBolt,
  FaRocket,
} from "react-icons/fa";

import { imageAboutslider } from "../@assets/image";
import Carousel from "react-bootstrap/Carousel";

export const AboutUs = () => {
  const [width, setWidth] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth < 800);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <section className="aboutus-section">
      <div className="image-design">
        <img
          src={imageAbout[!width ? 0 : 1]}
          alt=""
          style={{
            height: "80vh",
            width: "100%",
            position: "relative",
          }}
        />
        <div className="aboutus-image-header">
          <motion.h1
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 300, opacity: 1 }}
            transition={{
              duration: 5,
              type: "spring",
            }}
            className="aboutus-header-text Title"
          >
            About Us
          </motion.h1>
        </div>
      </div>
      <div className="aboutus-container">
        <div className="aboutus-header">
          "Bringing quality alloy steel and aluminum to dealers nationwide.{" "}
          <br />
          We specialize in providing top-notch materials for your business
          needs.
          <br />
          Discover excellence with us."
        </div>
        <div className="aboutus-content innerWidth paddings">
          <div className="about-left">
            <div className="about-image">
              <img
                className="img-cont1"
                src={imageAbout[2]}
                alt=""
                // width={"40%"}  height={"40%"}
              />
            </div>
          </div>
          <div className="about-right">
            <div className="about-right-content">
              <div className="about-icons">
                <FaUserCog />
              </div>
              <div className="about-right-content-text">
                <strong>Expertise: </strong> Our team comprises seasoned
                metallurgists and engineers with a wealth of knowledge in
                stainless steel, copper, and nickel alloys. Their expertise
                enables us to create alloys that offer exceptional performance
                and durability.
              </div>
            </div>
            <div className="about-right-content">
              <div className="about-icons">
                <FaBalanceScale />
              </div>
              <div className="about-right-content-text">
                <strong>Quality: </strong> Quality is our top priority. We
                adhere to strict quality control measures throughout the
                manufacturing process to ensure that every alloy meets the
                highest standards of excellence.
              </div>
            </div>
            <div className="about-right-content">
              <div className="about-icons">
                <FaLightbulb />
              </div>
              <div className="about-right-content-text">
                <strong>Innovation: </strong>Innovation is at the heart of our
                operations. We invest in research and development to stay at the
                forefront of alloy technology, constantly improving our products
                to meet evolving industry demands.
              </div>
            </div>
          </div>
        </div>
        <div className="aboutus-content innerWidth paddings">
          <div className="about-left">
            <div className="about-left-content">
              <div className="about-icons">
                <FaWrench />
              </div>
              <div className="about-left-content-text">
                <strong>Stainless Steel Alloys: </strong>We offer a wide range
                of stainless steel alloys suitable for various applications,
                including corrosion-resistant grades for harsh environments and
                high-strength alloys for structural purposes.
              </div>
            </div>
            <div className="about-left-content">
              <div className="about-icons">
                <FaBolt />
              </div>
              <div className="about-left-content-text">
                <strong>Nickel Alloys: </strong>Our nickel alloys excel in
                extreme environments, providing exceptional resistance to heat,
                corrosion, and wear. They are used in aerospace, chemical
                processing, and other demanding industries.
              </div>
            </div>
            <div className="about-left-content">
              <div className="about-icons">
                <FaRocket />
              </div>
              <div className="about-left-content-text">
                <strong>Copper Alloys: </strong>Our copper alloys are known for
                their conductivity, corrosion resistance, and thermal
                properties, making them ideal for electrical, plumbing, and
                industrial applications.
              </div>
            </div>
          </div>
          <div className="about-right">
            <div className="about-image">
              <img
                className="img-cont1"
                src={imageAbout[3]}
                alt=""
                // width={"40%"}  height={"40%"}
              />
            </div>
          </div>
        </div>
        <div className="aboutus-content padding">
          <Carousel interval={4000} pause={false}>
            {imageAboutslider.map((data, index) => (
              <Carousel.Item key={index}>
                <img className="about-carousal-images" src={data} alt="" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};
