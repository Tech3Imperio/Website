import React from "react";
import "./styles.css";
import { DropDown } from "../@components/DropDown/DropDown";
import { ContainerMetal } from "../@components/Container/ContainerMetal";
import { elementsData } from "../../Data/element";

export const Copper = () => {
  return (
    <div className="copper-container">
      <DropDown position={3} />
      <div className="copper-main-content">
        <ContainerMetal
          header="Copper Alloy"
          image={elementsData["copper"][0]}
          contentHeader="Copper Alloy Products"
          content={elementsData["copper"][1]}
          button="Enquire Us"
        />
        <div className="copper-extras">
          <div className="copper-extras-divs">
            <div className="header">
              Cu ETP and Copper Tellurium Products supplier in India
            </div>
            <p>
              Pipes and tubes are an important part of our day-to-day lives.
              Copper is a chemical element, which is used in making highly
              ductile and malleable products in the piping industry. The
              products produced from this element possess high thermal and
              excellent electrical conductivity. A
              <span style={{ fontWeight: "bold" }}>Copper Alloy</span> is placed
              in the category of
              <span style={{ fontWeight: "bold" }}>red metals</span>. These
              metals have a distinct tint of a reddish color. These alloys occur
              naturally and show good resistance against corrosion. In marine
              conditions, these alloys are prone to selective corrosion. One of
              the alloys in this grade is the
              <span style={{ fontWeight: "bold" }}>Copper Tellurium</span>,
              which is also referred to as
              <span style={{ fontWeight: "bold" }}>alloy 45</span>. These alloys
              can be easily machined and fabricated. They have a melting point
              of about 1080 degrees C. In the
              <span style={{ fontWeight: "bold" }}>Copper Alloy</span>
              composition, copper is a major constituent. Apart from this
              nickel, tin, zinc, sulfur, silicon, aluminum, lead, phosphorous,
              tin, and antinomy are a few elements that can combine with copper
              in various systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
