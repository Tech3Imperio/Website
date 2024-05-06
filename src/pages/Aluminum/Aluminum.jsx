import React from "react";
import "./styles.css";
import { DropDown } from "../@components/DropDown/DropDown";
import { ContainerMetal } from "../@components/Container/ContainerMetal";
import { elementsData } from "../../Data/element";

export const Aluminum = () => {
  return (
    <div className="aluminum-container">
      <DropDown position={0} />
      <div className="aluminum-main-content">
        <ContainerMetal
          header="Aluminum Alloy"
          image={elementsData["aluminum"][0]}
          contentHeader="Aluminum Alloy Products"
          content={elementsData["aluminum"][1]}
          button="Enquire Us"
        />
      </div>
    </div>
  );
};
