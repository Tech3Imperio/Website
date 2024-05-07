import "./styles.css";
import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaSquareFacebook as Facebook,
  FaXTwitter as Twitter,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
} from "react-icons/fa6";

export const ContactLeft = () => {
  return (
    <aside className="contact-left">
      <div className="contact-left-container">
        <div className="contact-left-design">
          <div className="contact-left-ring"></div>
          <div className="contact-left-ring"></div>
        </div>
        <div className="left-header-container">
          <h1 className="left-header PrimaryText">Contact Information</h1>
          <div className="left-header-text">
            Say something to start a live chat!
          </div>
        </div>
        <div className="left-contact-container">
          <div className="left-contact-details">
            <div className="left-contact-detail">
              <div>
                <FaPhone />
              </div>
              <div>
                <Link to={`tel:+910000000000`} target="_blank">
                  +910000000000
                </Link>
              </div>
            </div>
            <div className="left-contact-detail">
              <div>
                <FaEnvelope />
              </div>
              <div>
                <Link to={`mailto:tech@risealloys.com`} target="_blank">
                  tech@risealloys.com
                </Link>
              </div>
            </div>
            <div className="left-contact-detail">
              <div>
                <FaLocationDot />
              </div>
              <div>
                <Link
                  to={`https://goo.gl/maps/WS9LBcQF6RsXW9mHA`}
                  target="_blank"
                >
                  1, Aman Chambers, New Queens Rd, Charni Road, Mumbai,
                  Maharashtra 400004.
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="left-contact-footer">
          <div className="left-contact-footer-icons">
            <div className="left-content-icons">
              <Link
                target="_blank"
                to="https://www.facebook.com/imperiorailingsystem/"
              >
                <Facebook />
              </Link>
            </div>
            <div className="left-content-icons">
              <Link target="_blank" to="https://twitter.com/ImperioRailing">
                <Twitter />
              </Link>
            </div>
            <div className="left-content-icons">
              <Link
                target="_blank"
                to="https://www.instagram.com/imperio.railings/"
              >
                <Instagram />
              </Link>
            </div>
            <div className="left-content-icons">
              <Link
                target="_blank"
                to="https://www.linkedin.com/company/imperiorailingsystems/"
              >
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
