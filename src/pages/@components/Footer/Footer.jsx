import "./styles.css";
import React from "react";
import { imageLogoW } from "../../@assets/image";
import { Link } from "react-router-dom";
import {
	FaFacebook as Facebook,
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
					1, Aman Chambers, New Queens Rd, Charni Road, Mumbai,
					Maharashtra 400004
				</p>
			</div>
			<div className="footer-content">
				<div className="contacts">
					<h5>Contact Us</h5>
					<p>
						<span style={{ fontWeight: "bold" }}>
							Phone Number:
						</span>{" "}
						+91 8591953385
					</p>
					<p>
						<span style={{ fontWeight: "bold" }}>Email:</span>
						hello@imperiorailing.com
					</p>
					<p>
						<span style={{ fontWeight: "bold" }}>Website:</span>
						www.imperiorailing.com
					</p>
				</div>
				<div className="footer-social">
					<h5>Follow Us</h5>
					<div className="social-icons">
						<div className="ficons">
							<Link
								target="_blank"
								to="https://www.facebook.com/imperiorailingsystem/"
							>
								<Facebook />
							</Link>
						</div>
						<div className="ficons">
							<Link
								target="_blank"
								to="https://twitter.com/ImperioRailing"
							>
								<Twitter />
							</Link>
						</div>
						<div className="ficons">
							<Link
								target="_blank"
								to="https://www.instagram.com/imperio.railings/"
								className="icons"
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
					<p>&copy; 2024 Imperio Railing System </p>
				</div>
			</div>
		</footer>
	);
};
