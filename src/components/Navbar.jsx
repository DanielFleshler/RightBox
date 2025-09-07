"use client";

import { EllipsisVertical, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
	{ name: "בית", href: "#home" },
	{ name: "מי אנחנו", href: "#carousel" },
	{ name: "גלריה", href: "#gallery" },
	{ name: "מוצרים", href: "#products" },
	{ name: "צור קשר", href: "#contact" },
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeTab, setActiveTab] = useState("#home");

	const accent = "var(--color-accent)";

	const handleGoto = (href) => {
		setActiveTab(href);
		setIsOpen(false);
		if (href === "#home") {
			window.scrollTo({ top: 0, behavior: "smooth" });
			// Clear hash from URL
			if (window.history && window.history.replaceState) {
				window.history.replaceState(null, "", window.location.pathname);
			}
			return;
		}
		const el = document.querySelector(href);
		if (el) {
			el.scrollIntoView({ behavior: "smooth", block: "start" });
		}
		// Clear hash from URL after scrolling
		if (window.history && window.history.replaceState) {
			window.history.replaceState(null, "", window.location.pathname);
		}
	};

	useEffect(() => {
		const sectionSelectors = navItems.map((i) => i.href);
		let sections = [];

		const getCurrentByViewportCenter = () => {
			const viewportCenter = window.innerHeight * 0.45;
			let best = { id: "#home", overlap: -Infinity };
			sections.forEach((sec) => {
				const rect = sec.getBoundingClientRect();
				const inside = viewportCenter >= rect.top && viewportCenter <= rect.bottom;
				const overlap = inside ? rect.bottom - rect.top : -Math.abs(viewportCenter - Math.max(Math.min(viewportCenter, rect.bottom), rect.top));
				if (overlap > best.overlap) best = { id: `#${sec.id}`, overlap };
			});
			return best.id;
		};

		const setup = () => {
			sections = sectionSelectors
				.map((sel) => document.querySelector(sel))
				.filter(Boolean);
			if (sections.length === 0) return () => {};

			// IntersectionObserver for primary tracking
			const observer = new IntersectionObserver(
				(entries) => {
					const visible = entries
						.filter((e) => e.isIntersecting)
						.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
					if (visible[0]) {
						const id = `#${visible[0].target.id}`;
						setActiveTab((prev) => (prev === id ? prev : id));
					}
				},
				{
					root: null,
					rootMargin: "-15% 0px -70% 0px",
					threshold: 0.2,
				}
			);
			sections.forEach((sec) => observer.observe(sec));

			// Scroll fallback to ensure robustness
			let ticking = false;
			const onScroll = () => {
				if (ticking) return;
				ticking = true;
				requestAnimationFrame(() => {
					const id = getCurrentByViewportCenter();
					setActiveTab((prev) => (prev === id ? prev : id));
					ticking = false;
				});
			};
			window.addEventListener("scroll", onScroll, { passive: true });

			// Initial state
			const initial = getCurrentByViewportCenter();
			setActiveTab(initial);
			// Clear initial hash if present
			if (window.location.hash && window.history && window.history.replaceState) {
				window.history.replaceState(null, "", window.location.pathname);
			}

			return () => {
				observer.disconnect();
				window.removeEventListener("scroll", onScroll);
			};
		};

		// Defer setup to next frame to ensure DOM is ready
		let cleanup = () => {};
		const raf = requestAnimationFrame(() => {
			cleanup = setup();
		});
		return () => {
			cancelAnimationFrame(raf);
			cleanup && cleanup();
		};
	}, []);

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 shadow-lg backdrop-blur-sm bg-white/80 text-textlight border-b border-steel/20">

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="flex items-center h-16">
					{/* Desktop */}
					<div
						className="hidden md:flex space-x-8 w-full justify-center"
						dir="rtl"
					>
						{navItems.map((item, index) => {
							const isActive = activeTab === item.href;
							return (
								<button
									key={item.href}
									onClick={() => handleGoto(item.href)}
									className={`px-6 py-2 text-sm font-medium transition-all duration-500 ease-out relative group hover:scale-105 ${
										isActive ? "bg-accent/20" : "bg-transparent"
									}`}
									style={{
										animationDelay: `${index * 100}ms`,
										animation: "slideInDown 0.6s ease-out forwards",
									}}
								>
									{item.name}
									<span
										className="absolute bottom-0 left-0 h-0.5 transition-all duration-500 ease-out bg-accent"
										style={{ width: isActive ? "100%" : "0%", opacity: isActive ? 1 : 0 }}
									/>
									<span
										className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 bg-accent/15"
									/>
								</button>
							);
						})}
					</div>

					{/* Mobile toggle */}
					<div className="md:hidden ml-auto">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="p-2 rounded-md transition-all duration-300 hover:rotate-90 text-textlight"
							aria-label="Toggle menu"
							aria-expanded={isOpen}
						>
							<div className="relative w-6 h-6">
								<EllipsisVertical
									className={`h-6 w-6 absolute transition-all duration-300 ${
										isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
									}`}
								/>
								<X
									className={`h-6 w-6 absolute transition-all duration-300 ${
										isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
									}`}
								/>
							</div>
						</button>
					</div>
				</div>

				{/* Mobile menu */}
				<div
					className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
						isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
					}`}
				>
					<div className="px-2 pt-2 pb-3 space-y-1 border-t border-steel/20 bg-white/80" dir="rtl">
						{navItems.map((item, index) => {
							const isActive = activeTab === item.href;
							return (
								<button
									key={item.href}
									onClick={() => handleGoto(item.href)}
									className={`block w-full text-right px-3 py-2 text-base font-medium transition-all duration-300 rounded-md hover:translate-x-2 ${
										isActive ? "bg-accent/25" : "bg-transparent"
									}`}
									style={{
										animationDelay: `${index * 50}ms`,
										animation: isOpen ? "slideInLeft 0.4s ease-out forwards" : "none",
									}}
								>
									{item.name}
								</button>
							);
						})}
					</div>
				</div>
			</div>

			<style jsx>{`
				@keyframes slideInDown {
					from {
						opacity: 0;
						transform: translateY(-20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				@keyframes slideInLeft {
					from {
						opacity: 0;
						transform: translateX(-20px);
					}
					to {
						opacity: 1;
						transform: translateX(0);
					}
				}
			`}</style>
		</nav>
	);
}
