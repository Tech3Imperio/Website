import "./styles.css";
import React from "react";
import { imageLogoH } from "../../@assets/image";
import { Link } from "react-router-dom";
import {
	FaFacebook as Facebook,
	FaXTwitter as Twitter,
	FaInstagram as Instagram,
	FaLinkedin as Linkedin,
} from "react-icons/fa6";

export const NavBar = (props) => {
	const open = () => {
		if (window.innerWidth < 1000) {
			const object = document.getElementById("dropdown");
			if (object.style.display !== "block") {
				object.style.display = "block";
			} else {
				object.style.display = "none";
			}
		} else {
			window.scrollTo({ top: 820, behavior: "smooth" });
		}
	};
	const logo = (
		<img id="logoimg" src={imageLogoH[0]} className="logo" alt="Logo" />
	);

	return (
		<nav
			className="navbar navbar-expand-lg navbar-dark fixed-top"
			style={{
				backgroundColor: props.background
					? "var(--teritary)"
					: "transparent",
				transition: "background-color 0.6s ease-in-out",
			}}
		>
			<div className="container-fluid">
				<Link to="/home" className="navbar-brand">
					{logo}
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasDarkNavbar"
					aria-controls="offcanvasDarkNavbar"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div
					className="offcanvas offcanvas-end"
					tabIndex={-1}
					id="offcanvasDarkNavbar"
					aria-labelledby="offcanvasDarkNavbarLabel"
				>
					<div className="offcanvas-header">
						<h5
							className="offcanvas-title"
							id="offcanvasDarkNavbarLabel"
						>
							<Link to="/home">{logo}</Link>
						</h5>
						<button
							type="button"
							className="btn-close btn-close-white"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						/>
					</div>
					<div className="offcanvas-body">
						<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
							<li className="nav-item">
								<div className="nav-link active">
									<Link className="Link" to="/home">
										Home
									</Link>
								</div>
							</li>
							<li className="nav-item">
								<div className="nav-link active">
									<Link className="Link" to="/home/aboutus">
										About Us
									</Link>
								</div>
							</li>
							<li className="nav-item">
								<div className="nav-link active">
									<div className="nav-dropdown">
										<Link
											className="Link nav-dropdown-text"
											onClick={open}
										>
											Products
										</Link>
										<div
											className="nav-dropdown-content"
											id="dropdown"
										>
											<Link
												className="Link"
												to="/home/aluminium-alloy"
											>
												Aluminium Alloy
											</Link>
											<Link
												className="Link"
												to="/home/titanium-alloy"
											>
												Titanium Alloy
											</Link>
											<Link
												className="Link"
												to="/home/stainless-steel"
											>
												Stainless Steel
											</Link>
											<Link
												className="Link"
												to="/home/copper-alloy"
											>
												Copper & Alloy
											</Link>
											<Link
												className="Link"
												to="/home/nickel-alloy"
											>
												Nickel Alloy
											</Link>
										</div>
									</div>
								</div>
							</li>
							{/* <li className="nav-item">
                <div className="nav-link active">
                  <Link className="Link" to="/home/blog">
                    Blog
                  </Link>
                </div>
              </li> */}
							<li className="nav-item">
								<div className="nav-link active">
									<Link className="Link" to="/home/contact">
										Contact Us
									</Link>
								</div>
							</li>
						</ul>
						<div className="nav-icons">
							<div className="nav-ficons">
								<Link
									target="_blank"
									to="https://www.facebook.com/imperiorailingsystem/"
								>
									<Facebook />
								</Link>
							</div>
							<div className="nav-ficons">
								<Link
									target="_blank"
									to="https://twitter.com/ImperioRailing"
								>
									<Twitter />
								</Link>
							</div>
							<div className="nav-ficons">
								<Link
									target="_blank"
									to="https://www.instagram.com/imperio.railings/"
									className="icons  "
								>
									<Instagram />
								</Link>
							</div>
							<div className="nav-ficons">
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
			</div>
		</nav>
	);
};
