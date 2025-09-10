"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const galleryImages = [
	{ src: "/images/gallery/gallery-1.JPG", alt: "גלריה – תמונה 1" },
	{ src: "/images/gallery/gallery-2.JPG", alt: "גלריה – תמונה 2" },
	{ src: "/images/gallery/gallery-3.JPG", alt: "גלריה – תמונה 3" },
	{ src: "/images/gallery/gallery-4.JPG", alt: "גלריה – תמונה 4" },
	{ src: "/images/gallery/gallery-5.JPG", alt: "גלריה – תמונה 5" },
];

export default function GallerySection() {
	const [current, setCurrent] = useState(0);
	const [paused, setPaused] = useState(false);
	const total = galleryImages.length;
	const timerRef = useRef(null);
	const touchStartX = useRef(null);

	const goto = (i) => setCurrent(((i % total) + total) % total);
	const next = () => goto(current + 1);
	const prev = () => goto(current - 1);

	// Autoplay with pause on hover/visibility
	useEffect(() => {
		if (paused) return;
		timerRef.current = setInterval(next, 5000);
		return () => clearInterval(timerRef.current);
	}, [current, paused]);

	useEffect(() => {
		const onVis = () => setPaused(document.hidden);
		document.addEventListener("visibilitychange", onVis);
		return () => document.removeEventListener("visibilitychange", onVis);
	}, []);

	const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
	const onTouchEnd = (e) => {
		if (touchStartX.current == null) return;
		const dx = e.changedTouches[0].clientX - touchStartX.current;
		const threshold = 48;
		if (dx > threshold) prev();
		else if (dx < -threshold) next();
		touchStartX.current = null;
	};

	return (
		<section
			id="gallery"
			className="py-0 text-textlight scroll-mt-80 md:scroll-mt-80 lg:scroll-mt-28"
			dir="ltr"
		>
			<div className="w-full">
				{/* Full-bleed wrapper */}
				<div className="relative w-screen left-1/2 -translate-x-1/2">
					<div
						className="relative overflow-hidden"
						role="region"
						aria-roledescription="carousel"
						aria-label="גלריית תמונות"
						onMouseEnter={() => setPaused(true)}
						onMouseLeave={() => setPaused(false)}
					>
						{/* Slides */}
						<div
							id="gallery-viewport"
							className="flex transition-transform duration-700 ease-out"
							style={{ transform: `translateX(-${current * 100}%)` }}
							onTouchStart={onTouchStart}
							onTouchEnd={onTouchEnd}
							aria-live="polite"
						>
							{galleryImages.map((img, i) => (
								<figure
									key={img.src}
									className="min-w-full relative h-[80vh] sm:h-[80vh] md:h-[70vh] lg:h-[70vh] xl:h-[70vh]"
									data-active={i === current}
								>
									<img
										src={img.src}
										alt={img.alt}
										className="absolute inset-0 w-full h-full object-contain"
										style={{ objectPosition: "center 35%" }}
										loading={i === 0 ? "eager" : "lazy"}
									/>
									<figcaption className="absolute right-4 top-4 glass rounded-xl px-3 py-1.5 text-sm">
										{i + 1}/{total}
									</figcaption>
									<div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none" />
								</figure>
							))}
						</div>

						{/* Controls */}
						<button
							onClick={prev}
							className="carousel-control absolute left-4 top-1/2 -translate-y-1/2 rounded-full"
							aria-label="שקופית קודמת"
							type="button"
						>
							<ChevronLeft className="w-5 h-5" aria-hidden />
						</button>
						<button
							onClick={next}
							className="carousel-control absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
							aria-label="שקופית הבאה"
							type="button"
						>
							<ChevronRight className="w-5 h-5" aria-hidden />
						</button>

						{/* Progress bar */}
						<div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-40 sm:w-56">
							<div className="progress-track">
								<div
									className="progress-bar"
									style={{ width: `${((current + 1) / total) * 100}%` }}
								/>
							</div>
						</div>

						{/* Thumbnails (desktop) */}
						<div className="hidden md:block absolute bottom-3 right-4">
							<div className="flex gap-2 overflow-x-auto no-scrollbar max-w-[60vw]">
								{galleryImages.map((img, i) => (
									<button
										key={img.src}
										onClick={() => goto(i)}
										className={`thumb ${i === current ? "thumb--active" : ""}`}
										aria-label={`עבור לתמונה ${i + 1}`}
										aria-current={i === current ? "true" : undefined}
									>
										<img
											src={img.src}
											alt=""
											className="w-full h-full object-cover"
										/>
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
