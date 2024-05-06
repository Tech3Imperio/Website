import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./styles.css";

export const Hero = (props) => {
  const [Width, setWidth] = useState(window.innerWidth < 500);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth < 500);
    };
    //Mount
    window.addEventListener("resize", handleResize);

    //Dismount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scale = () => {
    if (Width) {
      return props.data.slice(-7);
    }
    return props.data.slice(0, 7);
  };
  return (
    <Carousel>
      {scale().map((data, index) => (
        <Carousel.Item key={index}>
          <img className="carousal-images" src={data.img} alt={data.altText} />
          <Carousel.Caption>
            <h3 className="carousal-header Title">{data.header}</h3>
            <p className="carousal-content SecondaryText">{data.p}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
