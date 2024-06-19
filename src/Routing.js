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
import { Page404 } from "./pages/404/404";

export const Routing = () => {
  const [navBackground, setNavBackground] = useState(
    window.location.pathname === "/" || window.location.pathname === "/aboutus"
      ? false
      : true
  );

  useEffect(() => {
    const handleChange = () => {
      if (
        window.scrollY < 700 &&
        (window.location.pathname === "/" ||
          window.location.pathname === "/aboutus")
      ) {
        setNavBackground(false);
      } else {
        setNavBackground(true);
      }
    };

    const scrolls = () => {
      const condition =
        window.innerWidth < 500 &&
        (window.location.pathname.indexOf("/stainless-steel") !== -1 ||
          window.location.pathname.indexOf("/aluminium-alloy") !== -1 ||
          window.location.pathname.indexOf("/titanium-alloy") !== -1 ||
          window.location.pathname.indexOf("/nickel-alloy") !== -1 ||
          window.location.pathname.indexOf("/copper-alloy") !== -1);

      if (condition) {
        window.scrollTo(0, 830);
      } else {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("scroll", handleChange);
    window.addEventListener("popstate", () => {
      handleChange();
      scrolls();
    });
    window.addEventListener("click", (event) => {
      if (
        event.target.tagName === "A" ||
        (event.target.tagName === "IMG" && event.target.id === "logoimg")
      ) {
        handleChange();
        scrolls();
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
        <Route path="/" element={<Home />} />
        <Route path="/aluminium-alloy" element={<Aluminum />} />
        <Route path="/titanium-alloy" element={<Titanium />} />
        <Route path="/nickel-alloy" element={<Nickel />} />
        <Route path="/stainless-steel" element={<StainLessSteel />} />
        <Route path="/copper-alloy" element={<Copper />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routing;
