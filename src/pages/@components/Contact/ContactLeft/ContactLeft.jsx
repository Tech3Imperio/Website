import "./styles.css";
import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import { imageLogoW } from "../../../@assets/image";
import { Link } from "react-router-dom";
import {
	FaFacebook as Facebook,
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
					<div className="contact-left-ring"></div>
					<div className="contact-left-ring"></div>
					<div className="contact-left-ring"></div>
				</div>
				<div className="left-header-container">
					<h1 className="left-header PrimaryText">
						Contact Information
					</h1>
					<div className="left-header-text">
						Reach out to us and let's connect!
					</div>
				</div>
				<div className="left-contact-container">
					<div className="left-contact-details">
						<div className="left-contact-detail">
							<div>
								<FaPhone />
							</div>
							<div>
								<Link to={`tel:+910000000000`}>
									<strong>Mob No:</strong> +910000000000
								</Link>
							</div>
						</div>
						<div className="left-contact-detail">
							<div>
								<FaEnvelope />
							</div>
							<div>
								<Link to={`mailto:tech@risealloys.com`}>
									<strong>Email id:</strong>
									tech@risealloys.com
								</Link>
							</div>
						</div>
					</div>
					<div className="left-contact-details">
						<div className="left-content-logo">
							<Link to="/home">
								<img
									src={imageLogoW[1]}
									alt="Rise Alloy Logo"
								/>
							</Link>
						</div>
						<div className="left-content-address">
							1, Aman Chambers, New Queens Rd, Charni Road,
							Mumbai, Maharashtra 400004.
						</div>
					</div>
				</div>
				<div className="left-contact-footer">
					<div className="left-contact-footer-header PrimaryText">
						Follow Us On
					</div>
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
							<Link
								target="_blank"
								to="https://twitter.com/ImperioRailing"
							>
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
