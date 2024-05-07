import "./styles.css";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export const Carousels = (props) => {
	const [Width, setWidth] = useState(window.innerWidth < 500);
	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth < 500);
		};

		window.addEventListener("resize", handleResize);

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
		<Carousel interval={10}>
			{scale().map((data, index) => (
				<Carousel.Item key={index} interval={500}>
					<img
						className="carousal-images"
						src={data.img}
						alt={data.altText}
					/>
					<Carousel.Caption>
						<h3 className="carousal-header Title">{data.header}</h3>
						<p className="carousal-content SecondaryText">
							{data.p}
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
};
