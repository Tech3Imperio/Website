import "./styles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const DropDown = ({ position }) => {
	let temp = [0, 0, 0, 0, 0, 0];
	const [isOpen, setIsOpen] = useState(
		temp.map((num, index) => (index === Number(position) ? 1 : 0))
	);
	const handleDropdownClick = (dropDownNum) => {
		var temp = [...isOpen];
		temp[dropDownNum] = temp[dropDownNum] ? 0 : 1;
		setIsOpen(temp);
	};
	const DropAluminum = ({ index }) => {
		return (
			<div className="dropdown">
				<button
					className="dropbtn"
					style={{ borderRadius: !isOpen[index] && "20px" }}
					onClick={() => handleDropdownClick(index)}
				>
					<div className="dropbtn-text">Aluminium Alloy</div>
					<i
						className={`fa fa-arrow-down ${
							isOpen[index] && "open"
						}`}
					></i>
				</button>
				<div
					className="dropdown-table-content"
					style={{ display: isOpen[index] ? "block" : "none" }}
				>
					<Link to="/home/aluminium-alloy">AA 2014A</Link>
					<Link to="/home/aluminium-alloy">AA 2024</Link>
					<Link to="/home/aluminium-alloy">AA 2124</Link>
					<Link to="/home/aluminium-alloy">AA 5082</Link>
					<Link to="/home/aluminium-alloy">AA 5083</Link>
					<Link to="/home/aluminium-alloy">AA 6061</Link>
					<Link to="/home/aluminium-alloy">AA 6082</Link>
					<Link to="/home/aluminium-alloy">AA 7010</Link>
					<Link to="/home/aluminium-alloy">AA 7075</Link>
					<Link to="/home/aluminium-alloy">AA 3003</Link>
					<Link to="/home/aluminium-alloy">AA 5052</Link>
					<Link to="/home/aluminium-alloy">L63</Link>
					<Link to="/home/aluminium-alloy">1200 TH14</Link>
					<Link to="/home/aluminium-alloy">1200 TH14</Link>
					<Link to="/home/aluminium-alloy">6351T6 (HINDALCO)</Link>
				</div>
			</div>
		);
	};
	const DropTitanium = ({ index }) => {
		return (
			<div className="dropdown">
				<button
					className="dropbtn"
					style={{ borderRadius: !isOpen[index] && "20px" }}
					onClick={() => handleDropdownClick(index)}
				>
					<div className="dropbtn-text">Titanium Alloy</div>
					<i
						className={`fa fa-arrow-down ${
							isOpen[index] && "open"
						}`}
					></i>
				</button>
				<div
					className="dropdown-table-content"
					style={{ display: isOpen[index] ? "block" : "none" }}
				>
					<Link to="/home/titanium-alloy">GRADE 1</Link>
					<Link to="/home/titanium-alloy">GRADE 2</Link>
					<Link to="/home/titanium-alloy">GRADE 5</Link>
					<Link to="/home/titanium-alloy">GRADE 9</Link>
					<Link to="/home/titanium-alloy">GRADE 5 ELI</Link>
					<Link to="/home/titanium-alloy">AMS A5.16M-2004</Link>
					<Link to="/home/titanium-alloy">TITANIUM FOIL</Link>
				</div>
			</div>
		);
	};
	const DropStainless = ({ index }) => {
		return (
			<div className="dropdown">
				<button
					className="dropbtn"
					style={{ borderRadius: !isOpen[index] && "20px" }}
					onClick={() => handleDropdownClick(index)}
				>
					<div className="dropbtn-text">Stainless Steel</div>
					<i
						className={`fa fa-arrow-down ${
							isOpen[index] && "open"
						}`}
					></i>
				</button>
				<div
					className="dropdown-table-content"
					style={{ display: isOpen[index] ? "block" : "none" }}
				>
					<Link to="/home/stainless-steel">13-8 MO</Link>
					<Link to="/home/stainless-steel">15-5 PH</Link>
					<Link to="/home/stainless-steel">17-4 PH</Link>
					<Link to="/home/stainless-steel">A286</Link>
					<Link to="/home/stainless-steel">304/304L</Link>
					<Link to="/home/stainless-steel">316/316L</Link>
					<Link to="/home/stainless-steel">321</Link>
					<Link to="/home/stainless-steel">347</Link>
					<Link to="/home/stainless-steel">355</Link>
					<Link to="/home/stainless-steel">
						STEEL X4CRNI 13-4 NO 1.4313 (SS 415)
					</Link>
				</div>
			</div>
		);
	};
	const DropCopper = ({ index }) => {
		return (
			<div className="dropdown">
				<button
					className="dropbtn"
					style={{ borderRadius: !isOpen[index] && "20px" }}
					onClick={() => handleDropdownClick(index)}
				>
					<div className="dropbtn-text">Copper & Alloys</div>
					<i
						className={`fa fa-arrow-down ${
							isOpen[index] && "open"
						}`}
					></i>
				</button>
				<div
					className="dropdown-table-content"
					style={{ display: isOpen[index] ? "block" : "none" }}
				>
					<Link to="/home/copper-alloy">Copper C101</Link>
					<Link to="/home/copper-alloy">Copper C102</Link>
					<Link to="/home/copper-alloy">C103</Link>
					<Link to="/home/copper-alloy">C110</Link>
					<Link to="/home/copper-alloy">COPPER ETP</Link>
					<Link to="/home/copper-alloy">CAA110</Link>
					<Link to="/home/copper-alloy">COPPER ZICRONIUM</Link>
				</div>
			</div>
		);
	};
	const DropNickel = ({ index }) => {
		return (
			<div className="dropdown">
				<button
					className="dropbtn"
					style={{ borderRadius: !isOpen[index] && "20px" }}
					onClick={() => handleDropdownClick(index)}
				>
					<div className="dropbtn-text">Nickel Alloys</div>
					<i
						className={`fa fa-arrow-down ${
							isOpen[index] && "open"
						}`}
					></i>
				</button>
				<div
					className="dropdown-table-content"
					style={{ display: isOpen[index] ? "block" : "none" }}
				>
					<Link to="/home/nickel-alloy">Alloy 188</Link>
					<Link to="/home/nickel-alloy">Alloy 230</Link>
					<Link to="/home/nickel-alloy">Alloy 263</Link>
					<Link to="/home/nickel-alloy">Alloy 600</Link>
					<Link to="/home/nickel-alloy">Alloy 601</Link>
					<Link to="/home/nickel-alloy">Alloy 617</Link>
					<Link to="/home/nickel-alloy">Alloy 625</Link>
					<Link to="/home/nickel-alloy">Alloy 718</Link>
					<Link to="/home/nickel-alloy">Alloy X-750</Link>
					<Link to="/home/nickel-alloy">Alloy X</Link>
					<Link to="/home/nickel-alloy">Waspaloy</Link>
					<Link to="/home/nickel-alloy">Invar 36</Link>
					<Link to="/home/nickel-alloy">Alloy 42</Link>
					<Link to="/home/nickel-alloy">Alloy 25/L-605</Link>
					<Link to="/home/nickel-alloy">Alloy 80A</Link>
					<Link to="/home/nickel-alloy">Mu-Metal</Link>
					<Link to="/home/nickel-alloy">Alloy 82</Link>
				</div>
			</div>
		);
	};
	const DropOther = ({ index }) => {
		return (
			<div className="dropdown">
				<button
					className="dropbtn"
					style={{ borderRadius: !isOpen[index] && "20px" }}
					onClick={() => handleDropdownClick(index)}
				>
					<div className="dropbtn-text">Other Metal</div>
					<i
						className={`fa fa-arrow-down ${
							isOpen[index] && "open"
						}`}
					></i>
				</button>
				<div
					className="dropdown-table-content"
					style={{ display: isOpen[index] ? "block" : "none" }}
				>
					<Link to="/home/other-alloy">TUNGSTEN</Link>
					<Link to="/home/other-alloy">YTTRIUM</Link>
					<Link to="/home/other-alloy">LANTHANUM</Link>
					<Link to="/home/other-alloy">SAMARIUM</Link>
					<Link to="/home/other-alloy">YTTERBIUM</Link>
					<Link to="/home/other-alloy">VANADIUM</Link>
					<Link to="/home/other-alloy">COBALT</Link>
					<Link to="/home/other-alloy">TANTALUM</Link>
					<Link to="/home/other-alloy">ZIRCONIUM</Link>
					<Link to="/home/other-alloy">MOLYBDENUM</Link>
					<Link to="/home/other-alloy">Tin Ingot</Link>
					<Link to="/home/other-alloy">ALLOY STEEL</Link>
					<Link to="/home/other-alloy">ALLOY STEEL</Link>
					<Link to="/home/other-alloy">AFK</Link>
					<Link to="/home/other-alloy">ALUMINIUM BRONZE C63000</Link>
					<Link to="/home/other-alloy">BERYLLIUM COPPER</Link>
					<Link to="/home/other-alloy">CARBON FIBRE</Link>
					<Link to="/home/other-alloy">COBALT ALLOY(KRAL)</Link>
					<Link to="/home/other-alloy">COBALT ALLOY 25/L-605</Link>
					<Link to="/home/other-alloy">CHROMIUM</Link>
					<Link to="/home/other-alloy">FERRO COBALT</Link>
					<Link to="/home/other-alloy">
						HIGH PURITY TUNGSTEN METAL
					</Link>
					<Link to="/home/other-alloy">INCONEL ALLOY 82</Link>
					<Link to="/home/other-alloy">INCONEL ALLOY 625</Link>
					<Link to="/home/other-alloy">INCONEL ALLOY 600</Link>
					<Link to="/home/other-alloy">NB (C-103)</Link>
					<Link to="/home/other-alloy">NB-1-ZR-05C</Link>
					<Link to="/home/other-alloy">NIMONIC ALLOY 80A</Link>
					<Link to="/home/other-alloy">NIMONIC ALLOY C-263</Link>
					<Link to="/home/other-alloy">NIMONIC ALLOY 90 BS</Link>
					<Link to="/home/other-alloy">NIMONIC ALLOY 75</Link>
					<Link to="/home/other-alloy">NIOBIUM ALLOY C-103</Link>
					<Link to="/home/other-alloy">NIOBIUM ALLOY</Link>
					<Link to="/home/other-alloy">ROTELLOY GRADE 8</Link>
					<Link to="/home/other-alloy">STEEL ALLOY A286</Link>
					<Link to="/home/other-alloy">SUPER METAL</Link>
					<Link to="/home/other-alloy">TANTALUM</Link>
					<Link to="/home/other-alloy">TUNGSTEN</Link>
					<Link to="/home/other-alloy">TUNGSTEN COPPER</Link>
				</div>
			</div>
		);
	};
	const rendering = (position) => {
		const dropdownComponents = [
			DropAluminum,
			DropTitanium,
			DropStainless,
			DropCopper,
			DropNickel,
			DropOther,
		];
		return (
			<>
				{dropdownComponents.map((DropdownComponent, index) => {
					if (index === position) {
						return <DropdownComponent key={index} index={index} />;
					} else {
						return null;
					}
				})}
				{dropdownComponents.map((DropdownComponent, index) => {
					if (index !== position) {
						return <DropdownComponent key={index} index={index} />;
					} else {
						return null;
					}
				})}
			</>
		);
	};

	return <div className="left">{rendering(position)}</div>;
};
