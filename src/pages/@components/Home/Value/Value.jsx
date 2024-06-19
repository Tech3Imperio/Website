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
          "Explore our premium aluminum, steel, and copper products in our interactive gallery. Discover exceptional quality and expert craftsmanship at Rise Alloys, setting us apart in the industry. Contact us today for high-quality solutions tailored to your needs",
      },
    ],
    [
      <FaEnvelope />,
      {
        header: "Get in Touch",
        content:
          "Ready for top-tier alloys? Contact us to explore stainless steel, copper, and nickel alloy products. Let's exceed your expectations with our unmatched quality and tailored solutions.",
      },
    ],
    [
      <IoOptionsSharp />,
      {
        header: "Customisation Options",
        content:
          "Discover tailored aluminium, steel, copper, and nickel products at Rise Alloys. Optimal performance and satisfaction guaranteed with our bespoke solutions. Experience industry-leading standards and expertly customized alloys today.",
      },
    ],
    [
      <HiOutlineBadgeCheck />,
      {
        header: "Quality Assurance",
        content:
          "Rise Alloys: Superior quality, premium materials, stringent standards. Trusted choice with certifications and warranties for reliability. Experience excellence today!",
      },
    ],
    [
      <HiPhotograph />,
      {
        header: "Project Portfolio",
        content:
          "Explore our versatile metal systems in our project portfolio. Witness excellence in luxurious homes and prestigious hotels. Elevate aesthetics and functionality with our steel, aluminum, nickel, and copper solutions.",
      },
    ],
  ];
  return (
    <section className="v-wrapper">
      <div className="value-section innerWidth paddings">
        <div className="v-right">
          <div className="PrimaryText value-main-header">
            Discover the Superiority of Rice Alloys
          </div>

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
              <Link to="contact">Get a Quote</Link>
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
