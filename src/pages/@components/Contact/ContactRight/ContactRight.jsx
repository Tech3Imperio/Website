import "./styles.css";
import React from "react";

export const ContactRight = () => {
  return (
    <aside className="contact-right">
      <div className="contact-right-container">
        <div className="contact-right-design">
          <div className="contact-right-ring"></div>
          <div className="contact-right-ring"></div>
        </div>
        <div className="right-contact-container">
          <div className="right-contact-details">
            <div className="right-contact-detail">
              <input type="text" id="name" />
              <label htmlFor="name">Company Name</label>
            </div>
            <div className="right-contact-detail">
              <input type="text" id="name" />
              <label htmlFor="name">Name</label>
            </div>
          </div>
          <div className="right-contact-details"></div>
        </div>
        <div className="right-contact-footer"></div>
      </div>
    </aside>
  );
};
