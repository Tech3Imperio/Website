import "./styles.css";
import React from "react";
import { ContactLeft, ContactRight } from "../../Components";

export const ContactUs = () => {
  return (
    <section>
      <div className="contact-header">
        <h1 className="Title">Contact Us</h1>
        <p className="PrimaryText">Any question or remarks?</p>
      </div>
      <div className="contact-container">
        <ContactLeft />
        <ContactRight />
      </div>
    </section>
  );
};
