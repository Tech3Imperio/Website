import React from "react";
import "./styles.css";
import { Hero } from "../@components/Hero/Hero";
import { AboutUs } from "../@components/AboutUs/AboutUs";
import { ProductSlider } from "../@components/Slider/Slider";
import { carousals } from "../../Data/carousal";

export const Home = () => {
  return (
    <div className="home-header">
      <Hero data={carousals} />
      <ProductSlider />
      <AboutUs />
    </div>
  );
};
