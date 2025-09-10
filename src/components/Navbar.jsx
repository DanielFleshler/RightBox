"use client";

import { ChevronRight, EllipsisVertical, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
	{ name: "בית", href: "#home" },
	{ name: "מי אנחנו", href: "#carousel" },
	{ name: "גלריה", href: "#gallery" },
	{ name: "מוצרים", href: "#products" },
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
			if (window.history && window.history.replaceState) {
				window.history.replaceState(null, "", window.location.pathname);
			}
			return;
		}
		const el = document.querySelector(href);
		if (el) {
			el.scrollIntoView({ behavior: "smooth", block: "start" });
		}
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
				const inside =
					viewportCenter >= rect.top && viewportCenter <= rect.bottom;
				const overlap = inside
					? rect.bottom - rect.top
					: -Math.abs(
							viewportCenter -
								Math.max(Math.min(viewportCenter, rect.bottom), rect.top)
					  );
				if (overlap > best.overlap) best = { id: `#${sec.id}`, overlap };
			});
			return best.id;
		};

		const setup = () => {
			sections = sectionSelectors
				.map((sel) => document.querySelector(sel))
				.filter(Boolean);
			if (sections.length === 0) return () => {};

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
			const initial = getCurrentByViewportCenter();
			setActiveTab(initial);
			if (
				window.location.hash &&
				window.history &&
				window.history.replaceState
			) {
				window.history.replaceState(null, "", window.location.pathname);
			}

			return () => {
				observer.disconnect();
				window.removeEventListener("scroll", onScroll);
			};
		};

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
		<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-steel/20 text-textlight">
			<nav
				className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
				dir="rtl"
			>
				{/* Brand */}
				<div className="flex items-center gap-3">
					<span className="font-black tracking-tight text-xl">
						הקופסה <span className="text-accent">הנכונה</span>
					</span>
				</div>

				{/* Desktop nav */}
				<ul className="hidden md:flex items-center gap-2 text-sm">
					{navItems.map((item) => {
						const isActive = activeTab === item.href;
						return (
							<li key={item.href}>
								<button
									onClick={() => handleGoto(item.href)}
									className={`relative inline-flex items-center px-4 py-2 rounded-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] hover:bg-accent/10 ${
										isActive ? "bg-accent/15" : ""
									}`}
								>
									{item.name}
								</button>
							</li>
						);
					})}
					<li>
						<a
							href="https://wa.me/972542516165"
							target="_blank"
							rel="noopener noreferrer"
							className="ml-1 inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold bg-[var(--color-accent)] text-white shadow hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
						>
							דברו איתנו
							<ChevronRight className="w-4 h-4" aria-hidden />
						</a>
					</li>
				</ul>

				{/* Mobile toggle */}
				<div className="md:hidden">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="rounded-lg p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
						aria-label="פתח תפריט"
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
			</nav>

			{/* Mobile menu */}
			<div
				className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
					isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
				}`}
			>
				<div
					className="px-4 pt-2 pb-3 space-y-1 border-t border-steel/20 bg-white/80"
					dir="rtl"
				>
					{navItems.map((item, index) => {
						const isActive = activeTab === item.href;
						return (
							<button
								key={item.href}
								onClick={() => handleGoto(item.href)}
								className={`block w-full text-right px-3 py-2 text-base font-medium transition-all duration-300 rounded-md hover:bg-accent/10 ${
									isActive ? "bg-accent/15" : "bg-transparent"
								}`}
								style={{
									animationDelay: `${index * 50}ms`,
									animation: isOpen
										? "slideInLeft 0.4s ease-out forwards"
										: "none",
								}}
							>
								{item.name}
							</button>
						);
					})}
					<a
						href="https://wa.me/972542516165"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold bg-[var(--color-accent)] text-white shadow hover:brightness-95"
					>
						דברו איתנו
						<ChevronRight className="w-4 h-4" aria-hidden />
					</a>
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
		</header>
	);
}
