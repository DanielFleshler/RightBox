"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Section from "./Section";

const DEFAULT_AUTOPLAY_MS = 5000;

const slidesData = [
  { src: "/images/gallery/gallery-1.JPG", alt: "רכב שטח מותאם, תצוגת זיווד פנימית" },
  { src: "/images/gallery/gallery-2.JPG", alt: "מגירות אחסון מודולריות פתוחות" },
  { src: "/images/gallery/gallery-3.JPG", alt: "מטבח שטח משולב ברכב" },
  { src: "/images/gallery/gallery-4.JPG", alt: "פתרון אחסון צדדי לרכב שטח" },
  { src: "/images/gallery/gallery-5.JPG", alt: "פנים הרכב לאחר זיווד מלא" },
];

export default function SlideshowSection({
  id = "slideshow",
  title = "",
  className = "",
  slides = slidesData,
  autoplay = false,
  autoplayMs = DEFAULT_AUTOPLAY_MS,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const autoplayRef = useRef(null);
  const pointerStart = useRef(null);

  const total = slides.length;
  const canAutoplay = autoplay && total > 1;

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return true;
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  const goTo = (index) => {
    setCurrentIndex((index + total) % total);
  };

  const goNext = () => goTo(currentIndex + 1);
  const goPrev = () => goTo(currentIndex - 1);

  // Autoplay (off by default)
  useEffect(() => {
    if (!canAutoplay || isPaused || prefersReducedMotion) return;
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % total);
    }, Math.max(2500, autoplayMs));
    return () => clearInterval(autoplayRef.current);
  }, [canAutoplay, isPaused, autoplayMs, prefersReducedMotion, total]);

  // Keyboard navigation
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    el.addEventListener("keydown", onKeyDown);
    return () => el.removeEventListener("keydown", onKeyDown);
  }, [currentIndex]);

  // Basic swipe
  const onPointerDown = (e) => {
    pointerStart.current = {
      x: e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0,
      t: Date.now(),
    };
  };
  const onPointerUp = (e) => {
    if (!pointerStart.current) return;
    const x = e.clientX ?? (e.changedTouches && e.changedTouches[0]?.clientX) ?? 0;
    const dx = x - pointerStart.current.x;
    const dt = Date.now() - pointerStart.current.t;
    const fast = dt < 600;
    const threshold = 40;
    if (Math.abs(dx) > threshold && fast) {
      if (dx < 0) goNext();
      else goPrev();
    }
    pointerStart.current = null;
  };

  return (
    <Section id={id} title={title} className={`sm:!py-0 md:!py-0 text-textlight ${className}`.trim()}>
      <div
        ref={containerRef}
        className="group relative mx-auto max-w-3xl select-none"
        role="region"
        aria-roledescription="carousel"
        aria-label="תמונות גלריה"
        tabIndex={0}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onTouchStart={onPointerDown}
        onTouchEnd={onPointerUp}
      >
        {/* Slides: crossfade */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-workshop">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                idx === currentIndex ? "opacity-100" : "opacity-0"
              }`.trim()}
              aria-hidden={idx !== currentIndex}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-full w-full object-cover"
                loading={idx === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          ))}
          <div className="pointer-events-none absolute inset-0" aria-live="polite" />
        </div>

        {/* Controls */}
        {total > 1 && (
          <>
            <button
              type="button"
              className="carousel-control absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 focus:opacity-100"
              onClick={goPrev}
              aria-label="הקודם"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="carousel-control absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 focus:opacity-100"
              onClick={goNext}
              aria-label="הבא"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </>
        )}

        {/* Dots */}
        {total > 1 && (
          <div className="mt-4 flex items-center justify-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`carousel-dot ${idx === currentIndex ? "carousel-dot--active" : ""}`.trim()}
                aria-label={`עבור לשקופית ${idx + 1}`}
                aria-current={idx === currentIndex}
                onClick={() => goTo(idx)}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}


