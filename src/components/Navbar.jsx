"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="navbar">
			<div className="container">
				<div className="navbar-header">
					<button
						className="hamburger"
						onClick={toggleMenu}
						aria-label="Toggle navigation menu"
					>
						<span className={`hamburger-icon ${isOpen ? "open" : ""}`}></span>
						<span className={`hamburger-icon ${isOpen ? "open" : ""}`}></span>
						<span className={`hamburger-icon ${isOpen ? "open" : ""}`}></span>
					</button>
				</div>
				<nav
					className={`navbar-nav ${isOpen ? "open" : ""}`}
					aria-label="ניווט ראשי"
				>
					<a className="nav-link" href="#home" onClick={() => setIsOpen(false)}>
						בית
					</a>
					<a
						className="nav-link"
						href="#carousel"
						onClick={() => setIsOpen(false)}
					>
						מי אנחנו
					</a>
					<a
						className="nav-link"
						href="#gallery"
						onClick={() => setIsOpen(false)}
					>
						גלריה
					</a>
					<a
						className="nav-link"
						href="#products"
						onClick={() => setIsOpen(false)}
					>
						מוצרים
					</a>
					<a
						className="nav-link"
						href="#contact"
						onClick={() => setIsOpen(false)}
					>
						צור קשר
					</a>
				</nav>
			</div>
		</header>
	);
}
