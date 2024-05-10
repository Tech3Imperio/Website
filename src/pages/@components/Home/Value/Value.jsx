import "./styles.css";
import { Link } from "react-router-dom";
import { imageValue } from "../../../@assets/image";
import { LuShoppingCart } from "react-icons/lu";
import { FaEnvelope } from "react-icons/fa";
import { IoOptionsSharp } from "react-icons/io5";
import { HiOutlineBadgeCheck, HiPhotograph } from "react-icons/hi";
import React from "react";

export const Value = () => {
  var valueData = [
    [
      <LuShoppingCart />,
      {
        header: "Product Showcase",
        content:
          "An interactive gallery displaying different types of railing systems offered by Imperio, with a focus on aluminum and stainless steel railing products.",
      },
    ],
    [
      <FaEnvelope />,
      {
        header: "Get in Touch",
        content:
          "Ready to discover the power of top-quality alloys? Contact us today to discuss your specific requirements or learn more about our stainless steel, copper, and nickel alloy offerings.",
      },
    ],
    [
      <IoOptionsSharp />,
      {
        header: "Customisation Options",
        content:
          "We customise our products to suit your specific needs and preferences.",
      },
    ],
    [
      <HiOutlineBadgeCheck />,
      {
        header: "Quality Assurance",
        content:
          "Information on the high-quality materials and manufacturing standards used in Rise Alloys's, along with any certifications or warranties offered.",
      },
    ],
    [
      <HiPhotograph />,
      {
        header: "Project Portfolio",
        content:
          "A showcase of past projects featuring Imperio's railing systems, demonstrating their versatility and aesthetic appeal in various settings such as Billionaire homes, 5 star hotels and buildings.",
      },
    ],
  ];
  return (
    <section className="v-wrapper">
      <div className="value-section innerWidth paddings">
        <div className="v-right">
          <span className="PrimaryText">
            Discover the Superiority of Rice Alloys
          </span>

          <div className="value-container">
            {valueData.map((item, index) => {
              return (
                <div key={index} className="value-provider">
                  <div className="value-icon">{item[0]}</div>
                  <div className="value-right">
                    <span className="PrimaryText value-header">
                      {item[1].header}
                    </span>
                    <span className="SecondaryText value-content">
                      {item[1].content}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="value-button">
            <button className="button val-btn">
              <Link to="contact">Get Coat</Link>
            </button>
          </div>
        </div>
        <div className="v-left">
          <div className="value-image">
            <img src={imageValue[0]} alt="value image" />
          </div>
        </div>
      </div>
    </section>
  );
};
