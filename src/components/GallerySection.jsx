"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Section from "./Section";

const galleryImages = [
	{ src: "/images/gallery/gallery-1.JPG", alt: "image 1" },
	{ src: "/images/gallery/gallery-2.JPG", alt: "image 2" },
	{ src: "/images/gallery/gallery-3.JPG", alt: "image 3" },
	{ src: "/images/gallery/gallery-4.JPG", alt: "image 4" },
	{ src: "/images/gallery/gallery-5.JPG", alt: "image 5" },
];

export default function GallerySection() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToNext = () => {
		setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
	};

	const goToPrev = () => {
		setCurrentIndex((prev) =>
			prev === 0 ? galleryImages.length - 1 : prev - 1
		);
	};

	const goToSlide = (index) => {
		setCurrentIndex(index);
	};

	return (
		<Section id="gallery" className="text-textlight">
			<div className="max-w-4xl mx-auto">
				<div
					className="relative aspect-[16/10] bg-gray-100 rounded-xl overflow-hidden shadow-xl"
					tabIndex={0}
					role="region"
					aria-label="גלריית פרויקטים"
				>
					{/* Images */}
					<div className="relative w-full h-full">
						{galleryImages.map((image, index) => (
							<img
								key={image.src}
								src={image.src}
								alt={image.alt}
								className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
									index === currentIndex ? "opacity-100" : "opacity-0"
								}`}
								loading={index === 0 ? "eager" : "lazy"}
							/>
						))}
					</div>
					<button
						onClick={goToPrev}
						className="carousel-control absolute left-4 top-1/2 -translate-y-1/2"
						aria-label="תמונה קודמת"
					>
						<ChevronLeft className="w-5 h-5" />
					</button>

					<button
						onClick={goToNext}
						className="carousel-control absolute right-4 top-1/2 -translate-y-1/2"
						aria-label="תמונה הבאה"
					>
						<ChevronRight className="w-5 h-5" />
					</button>

					{/* Dots Indicator */}
					<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
						{galleryImages.map((_, index) => (
							<button
								key={index}
								onClick={() => goToSlide(index)}
								className={`carousel-dot ${
									index === currentIndex ? "carousel-dot--active" : ""
								}`}
								aria-label={`עבור לתמונה ${index + 1}`}
								aria-current={index === currentIndex}
							/>
						))}
					</div>
				</div>
			</div>
		</Section>
	);
}
