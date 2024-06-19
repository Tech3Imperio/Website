import "./styles.css";
import React from "react";
import { imageLogoW } from "../../@assets/image";
import { Link } from "react-router-dom";
import {
  FaSquareFacebook as Facebook,
  FaXTwitter as Twitter,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
} from "react-icons/fa6";

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
        <img src={imageLogoW[0]} className="footer-logo" alt="Logo" />

        <p>
          <Link to={`https://goo.gl/maps/WS9LBcQF6RsXW9mHA`} target="_blank">
            New Queens Road, Mumbai, Mum - 400004
          </Link>
        </p>
      </div>
      <div className="footer-content">
        <div className="contacts">
          <h5>Contact Us</h5>
          <p>
            <span style={{ fontWeight: "bold" }}>Phone Number:</span> +91 93725
            93981
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Email: </span>
            info@risealloys.com
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Website: </span>
            www.risealloys.com
          </p>
        </div>
        <div className="footer-social">
          <h5>Follow Us</h5>
          <div className="footer-icons">
            <div className="ficons">
              <Link
                target="_blank"
                to="https://www.facebook.com/imperiorailingsystem/"
              >
                <Facebook />
              </Link>
            </div>
            <div className="ficons">
              <Link target="_blank" to="https://twitter.com/ImperioRailing">
                <Twitter />
              </Link>
            </div>
            <div className="ficons">
              <Link
                target="_blank"
                to="https://www.instagram.com/imperio.railings/"
              >
                <Instagram />
              </Link>
            </div>
            <div className="ficons">
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
      <div className="footer-content">
        <div className="emails">
          <input
            type="email"
            className="email-input"
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
        </div>
        <div className="copyright">
          <p>&copy; 2024 Rise Alloys </p>
        </div>
      </div>
    </footer>
  );
};
