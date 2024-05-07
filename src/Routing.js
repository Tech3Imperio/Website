import React, { useEffect, useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { NavBar } from "./pages/@components/NavBar/NavBar";
import { Footer } from "./pages/@components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Aluminum } from "./pages/Aluminum/Aluminum";
import { Titanium } from "./pages/Titanium/Titanium";
import { Nickel } from "./pages/Nickel/Nickel";
import { StainLessSteel } from "./pages/StainLessSteel/StainLessSteel";
import { Copper } from "./pages/Copper/Copper";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import { AboutUs } from "./pages/AboutUs/AboutUs";

export const Routing = () => {
	const [navBackground, setNavBackground] = useState(
		window.location.pathname === "/home" ||
			window.location.pathname === "/home/" ||
			window.location.pathname === "/"
			? false
			: true
	);

	useEffect(() => {
		const handleChange = () => {
			if (
				window.scrollY < 700 &&
				(window.location.pathname === "/home" ||
					window.location.pathname === "/home/" ||
					window.location.pathname === "/")
			) {
				setNavBackground(false);
			} else {
				setNavBackground(true);
			}
		};

		window.addEventListener("scroll", handleChange);
		window.addEventListener("popstate", handleChange);
		window.addEventListener("click", (event) => {
			if (
				event.target.tagName === "A" ||
				(event.target.tagName === "IMG" &&
					event.target.id === "logoimg")
			) {
				handleChange();
			}
		});

		return () => {
			window.removeEventListener("scroll", handleChange);
			window.removeEventListener("popstate", handleChange);
			window.removeEventListener("click", (event) => {
				if (event.target.tagName === "A") {
					handleChange();
				}
			});
		};
	}, []);

	return (
		<Router>
			<NavBar background={navBackground} />
			<Routes>
				<Route path="/" element={<Navigate replace to="/home" />} />
				<Route path="/home" element={<Home />} />
				<Route path="/home/aluminium-alloy" element={<Aluminum />} />
				<Route path="/home/titanium-alloy" element={<Titanium />} />
				<Route path="/home/nickel-alloy" element={<Nickel />} />
				<Route
					path="/home/stainless-steel"
					element={<StainLessSteel />}
				/>
				<Route path="/home/copper-alloy" element={<Copper />} />
				<Route path="/home/contact" element={<ContactUs />} />
				<Route path="/home/about" element={<AboutUs />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default Routing;
