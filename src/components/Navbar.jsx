"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("home");

	// Lock body scroll when menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	const navLinks = [
		{ id: "home", label: "בית" },
		{ id: "carousel", label: "מי אנחנו" },
		{ id: "gallery", label: "גלריה" },
		{ id: "products", label: "מוצרים" },
		{ id: "contact", label: "צור קשר" },
	];

	return (
		<>
			{/* Hamburger always outside navbar for mobile */}
			<button
				className="hamburger"
				onClick={() => setIsOpen((v) => !v)}
				aria-label="Toggle navigation menu"
				aria-expanded={isOpen}
				aria-controls="primary-navigation"
				type="button"
			>
				<div className={`hamburger-icon${isOpen ? " open" : ""}`}></div>
			</button>

			{/* Desktop Navbar */}
			<header
				className={`navbar${isScrolled ? " scrolled" : ""}`}
				role="banner"
			>
				<div className="container">
					<nav
						className="navbar-nav"
						id="primary-navigation"
						aria-label="ניווט ראשי"
						role="navigation"
					>
						{navLinks.map((link) => (
							<a
								key={link.id}
								className={`nav-link${
									activeSection === link.id ? " active" : ""
								}`}
								href={`#${link.id}`}
								tabIndex={0}
								onClick={() => setIsOpen(false)}
							>
								{link.label}
							</a>
						))}
					</nav>
				</div>
			</header>

			{/* Mobile Menu rendered outside .navbar so it's not hidden by display:none */}
			{isOpen && (
				<nav
					className="navbar-nav open"
					id="primary-navigation"
					aria-label="ניווט ראשי"
					role="navigation"
				>
					{navLinks.map((link) => (
						<a
							key={link.id}
							className={`nav-link${
								activeSection === link.id ? " active" : ""
							}`}
							href={`#${link.id}`}
							tabIndex={0}
							onClick={() => setIsOpen(false)}
						>
							{link.label}
						</a>
					))}
				</nav>
			)}
		</>
	);
	// ...existing code...
}
