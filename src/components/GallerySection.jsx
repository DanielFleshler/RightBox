"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef, useState } from "react";
import Section from "./Section";

const galleryImages = [
	{ src: "/images/gallery/gallery-1.JPG", alt: "תמונה גלריה 1" },
	{ src: "/images/gallery/gallery-2.JPG", alt: "תמונה גלריה 2" },
	{ src: "/images/gallery/gallery-3.JPG", alt: "תמונה גלריה 3" },
	{ src: "/images/gallery/gallery-4.JPG", alt: "תמונה גלריה 4" },
	{ src: "/images/gallery/gallery-5.JPG", alt: "תמונה גלריה 5" },
];

export default function GallerySection() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const touchStartX = useRef(null);

	const total = galleryImages.length;
	const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % total);
	const prevSlide = () =>
		setCurrentSlide((prev) => (prev === 0 ? total - 1 : prev - 1));
	const goToSlide = (slideIndex) => setCurrentSlide(slideIndex);

	const onTouchStart = (e) => {
		touchStartX.current = e.touches[0].clientX;
	};
	const onTouchEnd = (e) => {
		if (touchStartX.current == null) return;
		const delta = e.changedTouches[0].clientX - touchStartX.current;
		const threshold = 48; // px
		if (delta > threshold) prevSlide();
		else if (delta < -threshold) nextSlide();
		touchStartX.current = null;
	};

	return (
		<Section id="gallery" className="text-textlight py-0">
			{/* Anchor to match hero scroll target */}
			<div id="carousel" aria-hidden className="sr-only" />
			<div className="w-full">
				<div className="relative w-screen left-1/2-translate-x-1/2">
					<div
						className="relative overflow-hidden group border-y border-steel/20"
						role="region"
						aria-roledescription="carousel"
						aria-label="גלריית תמונות"
					>
						<div
							id="gallery-viewport"
							className="flex transition-transform duration-500 ease-out"
							style={{
								transform: `translateX(-${currentSlide * 100}%)`,
							}}
							onTouchStart={onTouchStart}
							onTouchEnd={onTouchEnd}
						>
							{galleryImages.map((slide, index) => (
								<div
									key={slide.src}
									className="min-w-full relative h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px] xl:h-[420px] bg-workshop"
								>
									<img
										src={slide.src}
										alt={slide.alt}
										className="absolute inset-0 w-full h-full object-cover"
										loading={index === 0 ? "eager" : "lazy"}
									/>
								</div>
							))}
						</div>
					</div>

					<button
						onClick={prevSlide}
						className="carousel-control absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full"
						aria-label="שקופית קודמת"
						type="button"
					>
						<ChevronLeft className="w-4 h-4" aria-hidden />
					</button>

					<button
						onClick={nextSlide}
						className="carousel-control absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full"
						aria-label="שקופית הבאה"
						type="button"
					>
						<ChevronRight className="w-4 h-4" aria-hidden />
					</button>

					<div
						className="absolute bottom-4 left-4 flex items-center gap-2"
						dir="ltr"
					>
						{galleryImages.map((_, index) => (
							<button
								key={index}
								onClick={() => goToSlide(index)}
								className={`carousel-dot ${
									index === currentSlide ? "carousel-dot--active" : ""
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
