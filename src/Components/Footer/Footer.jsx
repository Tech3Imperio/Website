import "./styles.css";
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF as Facebook,
  FaXTwitter as Twitter,
  FaInstagram as Instagram,
  FaLinkedinIn as Linkedin,
} from "react-icons/fa6";
import { logoWhiteW } from "../../Assets";

export const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const object1 = document.getElementById("submited");
    const object2 = document.getElementById("button");
    object1.style.display = "block";
    object2.style.display = "none";
  };

  return (
    <footer className="footer-section ">
      <div className="footer-content ">
        <img src={logoWhiteW} className="footer-logo" alt="Logo" />

        <p>
          <Link to="https://goo.gl/maps/WS9LBcQF6RsXW9mHA" target="_blank">
            New Queens Road, Mumbai - 400004
          </Link>
        </p>
      </div>
      <div className="footer-content">
        <div className="contacts">
          <h5 className="Raleway">Contact Us</h5>
          <div className="contacts-content">
            <p>
              <span className="Raleway">Phone Number:</span> +91 93725 93981
            </p>
            <p>
              <span className="Raleway">Email: </span>
              info@risealloys.com
            </p>
            <p>
              <span className="Raleway">Website: </span>
              www.risealloys.com
            </p>
          </div>
        </div>
        <div className="footer-social">
          <h5 className="Raleway">Follow Us</h5>
          <div className="footer-icons">
            <div className="ficons">
              <Link target="_blank" to="www.facebook.com">
                <Facebook />
              </Link>
            </div>
            <div className="ficons">
              <Link target="_blank" to="twitter.com">
                <Twitter />
              </Link>
            </div>
            <div className="ficons">
              <Link target="_blank" to="www.instagram.com">
                <Instagram />
              </Link>
            </div>
            <div className="ficons">
              <Link target="_blank" to="www.linkedin.com">
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-content">
        <form className="emails">
          <input
            type="email"
            className="email-input Raleway"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="submit-btn button"
            id="button"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <div
            className="text-display button"
            id="submited"
            style={{ display: "none" }}
          >
            Submited
          </div>
        </form>
        <div className="copyright Raleway ">
          <p>&copy; 2024 Rise Alloys </p>
        </div>
      </div>
    </footer>
  );
};
