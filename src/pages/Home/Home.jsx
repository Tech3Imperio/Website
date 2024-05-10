import "./styles.css";
import React from "react";
import { Carousels } from "../@components/Carousel/Carousel";
import { carousals } from "../../Data/carousal";
import { AboutUs } from "../@components/Home/AboutUs/AboutUs";
import { ProductSlider } from "../@components/Home/Slider/Slider";
import { Value } from "../@components/Home/Value/Value";

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
