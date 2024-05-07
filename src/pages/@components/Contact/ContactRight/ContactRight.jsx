import "./styles.css";
import React from "react";

export const ContactRight = () => {
  return (
    <aside className="contact-right">
      <div className="contact-left-container">
        <div className="contact-left-design">
          <div className="contact-left-ring"></div>
          <div className="contact-left-ring"></div>
          <div className="contact-left-ring"></div>
          <div className="contact-left-ring"></div>
        </div>
        <div className="left-header-container">
          <h1 className="left-header PrimaryText">Contact Information</h1>
          <div className="left-header-text">
            Reach out to us and let's connect!
          </div>
        </div>
        <div className="left-contact-container">
          <div className="left-contact-details">
            <div className="left-contact-detail"></div>
            <div className="left-contact-detail"></div>
          </div>
          <div className="left-contact-details"></div>
        </div>
        <div className="left-contact-footer"></div>
      </div>
    </aside>
  );
};
