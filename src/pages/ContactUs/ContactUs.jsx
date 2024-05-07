import "./styles.css";
import React from "react";
import { ContactLeft } from "../@components/Contact/ContactLeft/ContactLeft";
import { ContactRight } from "../@components/Contact/ContactRight/ContactRight";

export const ContactUs = () => {
  return (
    <section>
      <div className="contact-header">
        <h1 className="Title">Contact Us</h1>
        <p className="PrimaryText">
          Any question or remarks? Just write a message!
        </p>
      </div>
      <div className="contact-container">
        <ContactLeft />
        <ContactRight />
      </div>
    </section>
  );
};
