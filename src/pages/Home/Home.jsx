import React from "react";
import "./styles.css";
import { Hero } from "../@components/Hero/Hero";
import { AboutUs } from "../@components/AboutUs/AboutUs";
import { ProductSlider } from "../@components/Slider/Slider";
export const Home = () => {
  return (
    <div className="home-header">
      <Hero />
      <ProductSlider />
      <AboutUs />
    </div>
  );
};
