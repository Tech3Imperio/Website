import { imgabout } from "../@assets/image";
import "./styles.css";
import React from "react";
import { motion } from "framer-motion";
export const AboutUs = () => {
  return (
    <div className="hero-title">
      <img
        src={imgabout}
        alt=""
        style={{
          height: "100vh",
          width: "100%",
          position: "relative",
        }}
      />
      <div className="headers">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: -520, opacity: 1 }}
          transition={{
            duration: 5,
            type: "spring",
          }}
        >
          Bringing quality alloy steel and aluminum to dealers nationwide. We
          specialize in providing top-notch materials for your business needs.
          Discover excellence with us.
        </motion.h1>
      </div>
      <div className="content">
        <dl>
          <dt>Welcome To Rise Alloy</dt>
          <dd>
            Expertise: Our team comprises seasoned metallurgists and engineers
            with a wealth of knowledge in stainless steel, copper, and nickel
            alloys. Their expertise enables us to create alloys that offer
            exceptional performance and durability. Quality: Quality is our top
            priority. We adhere to strict quality control measures throughout
            the manufacturing process to ensure that every alloy meets the
            highest standards of excellence. Innovation: Innovation is at the
            heart of our operations. We invest in research and development to
            stay at the forefront of alloy technology, constantly improving our
            products to meet evolving industry demands.
          </dd>
        </dl>
      </div>
    </div>
  );
};
