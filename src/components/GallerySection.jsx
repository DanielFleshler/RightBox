"use client";
import React, { useState } from "react";
import Section from "./Section";

const galleryImages = [
	{ src: "/images/gallery/gallery-1.svg", alt: "תמונה גלריה 1" },
	{ src: "/images/gallery/gallery-2.svg", alt: "תמונה גלריה 2" },
	{ src: "/images/gallery/gallery-3.svg", alt: "תמונה גלריה 3" },
	{ src: "/images/gallery/gallery-4.svg", alt: "תמונה גלריה 4" },
	{ src: "/images/gallery/gallery-5.svg", alt: "תמונה גלריה 5" },
	{ src: "/images/gallery/gallery-6.svg", alt: "תמונה גלריה 6" },
	{ src: "/images/gallery/gallery-7.svg", alt: "תמונה גלריה 7" },
	{ src: "/images/gallery/gallery-8.svg", alt: "תמונה גלריה 8" },
];

export default function GallerySection() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const total = galleryImages.length;
	const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % total);
	const prevSlide = () =>
		setCurrentSlide((prev) => (prev === 0 ? total - 1 : prev - 1));
	const goToSlide = (slideIndex) => setCurrentSlide(slideIndex);

	return (
		<Section id="gallery" title="גלריה" className="text-textlight">
			{/* Anchor to match hero scroll target */}
			<div id="carousel" aria-hidden className="sr-only" />
			<div className="max-w-4xl mx-auto">
				<div className="relative overflow-hidden rounded-lg shadow-lg group">
					<div
						className="flex transition-transform duration-500 ease-in-out"
						style={{ transform: `translateX(-${currentSlide * 100}%)` }}
					>
						{galleryImages.map((slide, index) => (
							<div key={slide.src} className="min-w-full relative">
								<img
									src={slide.src}
									alt={slide.alt}
									className="w-full h-96 object-cover"
									loading={index === 0 ? "eager" : "lazy"}
								/>
								{/* Optional overlay title; using alt to avoid empty heading */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-start p-6">
									<p className="text-white text-lg md:text-2xl font-bold">
										{slide.alt}
									</p>
								</div>
							</div>
						))}
					</div>

					<button
						onClick={prevSlide}
						className="absolute left-4 top-1/2 transform -translate-y-1/2 
                  bg-black/30 hover:bg-black/50 text-white p-3 rounded-full
                  transition-all duration-200 opacity-0 group-hover:opacity-100
                  focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50"
						aria-label="שקופית קודמת"
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>

					<button
						onClick={nextSlide}
						className="absolute right-4 top-1/2 transform -translate-y-1/2 
                  bg-black/30 hover:bg-black/50 text-white p-3 rounded-full
                  transition-all duration-200 opacity-0 group-hover:opacity-100
                  focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50"
						aria-label="שקופית הבאה"
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>

					<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
						{galleryImages.map((_, index) => (
							<button
								key={index}
								onClick={() => goToSlide(index)}
								className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 ${
									index === currentSlide
										? "bg-white"
										: "bg-white/50 hover:bg-white/75"
								}`}
								aria-label={`עבור לשקופית ${index + 1}`}
								aria-current={index === currentSlide ? "true" : undefined}
							/>
						))}
					</div>
				</div>
			</div>
		</Section>
	);
}
