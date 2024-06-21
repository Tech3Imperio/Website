import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes as RouteLines,
  Route,
  Navigate,
} from "react-router-dom";
import App from "./App";
import {
  AboutUs,
  Aluminum,
  ContactUs,
  Copper,
  Home,
  Nickel,
  NotFound,
  StainLessSteel,
  Titanium,
} from "./Pages";

export const Routes = () => {
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
      <RouteLines>
        <Route path="/" element={<App navBackground={navBackground} />}>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Navigate to="/" replace={true} />} />
          <Route path="aluminium-alloy" element={<Aluminum />} />
          <Route path="titanium-alloy" element={<Titanium />} />
          <Route path="nickel-alloy" element={<Nickel />} />
          <Route path="stainless-steel" element={<StainLessSteel />} />
          <Route path="copper-alloy" element={<Copper />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </RouteLines>
    </Router>
  );
};
