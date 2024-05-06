import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { carousal as data } from "../../../Data/carousal";

import "./styles.css";
export const Hero = () => {
  const scale = () => {
    if (window.innerWidth < 500) {
      return data(1);
    }
    return data(0);
  };
  return (
    <Carousel>
      {scale().map((data, index) => (
        <Carousel.Item key={index}>
          <img
            className="carousal-images"
            src={data.img}
            alt={data.altText}
            // height={"700vh"}
            // width={"100%"}
          />
          <Carousel.Caption>
            <h3 className="carousal-header Title">{data.header}</h3>
            <p className="carousal-content SecondaryText">{data.p}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
