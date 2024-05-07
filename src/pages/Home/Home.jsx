import "./styles.css";
import React from "react";
import { Carousels } from "../@components/Carousel/Carousel";
import { carousals } from "../../Data/carousal";
import { AboutUs } from "../@components/AboutUs/AboutUs";
import { ProductSlider } from "../@components/Slider/Slider";

export const Home = () => {
  //
  return (
    <div className="home-header">
      <Carousels data={carousals} />
      <ProductSlider />
      <AboutUs />
    </div>
  );
};
