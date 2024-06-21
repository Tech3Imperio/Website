import "./styles.css";
import React from "react";
import { Carousels, AboutUs, ProductSlider, Value } from "../../Components";
import { carousals } from "../../Data/carousal";

export const Home = () => {
  //
  return (
    <div className="home-header">
      <Carousels data={carousals} />
      <ProductSlider />
      <AboutUs />
      <Value />
    </div>
  );
};
