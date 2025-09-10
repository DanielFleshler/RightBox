"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

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
		<section id="gallery" className="py-24 text-textlight">
			<div className="w-full">
				<div
					className="relative aspect-[21/9] bg-gray-100 overflow-hidden shadow-xl"
					tabIndex={0}
					role="region"
					aria-label="Project Gallery"
				>
					<div
						className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
						style={{ transform: `translateX(-${currentIndex * 100}%)` }}
					>
						{galleryImages.map((image) => (
							<img
								key={image.src}
								src={image.src}
								alt={image.alt}
								className="w-full h-full object-cover flex-shrink-0"
								loading="lazy"
							/>
						))}
					</div>
					<button
						onClick={goToPrev}
						className="carousel-control absolute left-4 top-1/2 -translate-y-1/2"
						aria-label="Previous image"
					>
						<ChevronLeft className="w-5 h-5" />
					</button>

					<button
						onClick={goToNext}
						className="carousel-control absolute right-4 top-1/2 -translate-y-1/2"
						aria-label="Next image"
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
								aria-label={`Go to image ${index + 1}`}
								aria-current={index === currentIndex}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
