"use client";

import { EllipsisVertical, X } from "lucide-react";
import { useState } from "react";

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
            // Scroll to absolute top, not just the #home anchor
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

	return (
		<nav
			className="fixed top-0 left-0 right-0 z-50 shadow-lg backdrop-blur-sm"
			style={{
				backgroundColor: "#000000",
				color: "#ffffff",
				isolation: "isolate",
			}}
		>
			<div
				className="absolute inset-0 z-[-1]"
				style={{ backgroundColor: "#000000" }}
			/>

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
									className="px-6 py-2 text-sm font-medium transition-all duration-500 ease-out relative group hover:scale-105"
									style={{
										color: "#ffffff",
										backgroundColor: isActive
											? "rgba(251,146,60,0.2)"
											: "transparent",
										animationDelay: `${index * 100}ms`,
										animation: "slideInDown 0.6s ease-out forwards",
									}}
								>
									{item.name}
									<span
										className="absolute bottom-0 left-0 h-0.5 transition-all duration-500 ease-out"
										style={{
											backgroundColor: accent,
											width: isActive ? "100%" : "0%",
											opacity: isActive ? 1 : 0,
										}}
									/>
									<span
										className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300"
										style={{ backgroundColor: "rgba(251,146,60,0.12)" }}
									/>
								</button>
							);
						})}
					</div>

					{/* Mobile toggle */}
					<div className="md:hidden ml-auto">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="p-2 rounded-md transition-all duration-300 hover:rotate-90 text-white"
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
					<div
						className="px-2 pt-2 pb-3 space-y-1"
						style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
						dir="rtl"
					>
						{navItems.map((item, index) => {
							const isActive = activeTab === item.href;
							return (
								<button
									key={item.href}
									onClick={() => handleGoto(item.href)}
									className="block w-full text-right px-3 py-2 text-base font-medium transition-all duration-300 rounded-md hover:translate-x-2"
									style={{
										color: "#ffffff",
										backgroundColor: isActive
											? "rgba(251,146,60,0.25)"
											: "transparent",
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
