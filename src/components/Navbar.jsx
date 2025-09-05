"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

	const toggleMenu = () => setIsOpen((v) => !v);

    // Close on Escape and lock body scroll when menu is open
    useEffect(() => {
		const onKeyDown = (e) => {
			if (e.key === "Escape") setIsOpen(false);
		};
		document.addEventListener("keydown", onKeyDown);
		document.body.style.overflow = isOpen ? "hidden" : "";
		return () => {
			document.removeEventListener("keydown", onKeyDown);
			document.body.style.overflow = "";
		};
    }, [isOpen]);

    // Toggle solid background after leaving the top/hero
    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
			<div className="container">
				<div className="navbar-header">
				<button
						className="hamburger"
						onClick={toggleMenu}
						aria-label="Toggle navigation menu"
						aria-expanded={isOpen}
						aria-controls="primary-navigation"
						type="button"
					>
						<div className={`hamburger-icon ${isOpen ? "open" : ""}`}></div>
					</button>
				</div>
				<nav
					className={`navbar-nav ${isOpen ? "open" : ""}`}
					id="primary-navigation"
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
