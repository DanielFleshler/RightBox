"use client";
import heroBackgroundImage from "@/app/hero_background.jpg";
import { ChevronDown, HelpingHand, Settings, ShieldCheck } from "lucide-react";
import React from "react";

export default function HeroSection() {
	return (
		<section
			id="home"
			className="relative min-h-[100svh] overflow-hidden bg-brandbg bg-cover bg-no-repeat bg-center flex items-start md:items-start pt-24 sm:pt-8 md:pt-12 text-textlight"
			style={{
				backgroundImage: `url(${heroBackgroundImage.src})`,
			}}
		>
			<div className="absolute inset-0 overlay-light" />

			<div className="container relative z-10 mx-auto w-full px-4 flex flex-col items-center justify-center">
				<div className="mx-auto flex max-w-3xl flex-col items-center gap-6 md:gap-8 text-center">
					<div>
						<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-textlight leading-tight uppercase heading-stamp">
							הקופסה <span className="text-accent">הנכונה</span>
						</h1>
						<div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[var(--color-accent)]" />
					</div>

					<p className="max-w-[50ch] text-base sm:text-lg md:text-xl text-textlight font-medium">
						ציוד פרימיום לחובבי שטח שמבקשים אמינות, עמידות ונוחות — מותאם לכל
						תנאי השטח בישראל.
					</p>
				</div>

				{/* Features Section */}
				<div className="w-full max-w-5xl mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start justify-items-center md:mt-16">
					{/* Feature 1: Lifetime Warranty */}
					<div className="flex flex-row-reverse items-center gap-4 text-right">
						<ShieldCheck
							className="h-10 w-10 text-accent flex-shrink-0"
							aria-hidden
						/>
						<div>
							<div className="font-bold text-lg text-textlight">
								אחריות לכל החיים
							</div>
							<div className="text-sm text-steel">נבנה לעמידות מקסימלית</div>
						</div>
					</div>

					{/* Feature 2: Full Customization */}
					<div className="flex flex-row-reverse items-center gap-4 text-right">
						<Settings
							className="h-10 w-10 text-accent flex-shrink-0"
							aria-hidden
						/>
						<div>
							<div className="font-bold text-lg text-textlight">
								התאמה אישית מלאה
							</div>
							<div className="text-sm text-steel">
								תכנון וייצור לפי הרכב והצרכים
							</div>
						</div>
					</div>

					{/* Feature 3: Professional Support */}
					<div className="flex flex-row-reverse items-center gap-4 text-right">
						<HelpingHand
							className="h-10 w-10 text-accent flex-shrink-0"
							aria-hidden
						/>
						<div>
							<div className="font-bold text-lg text-textlight">
								תמיכה מקצועית
							</div>
							<div className="text-sm text-steel">ליווי והתקנה בשטח</div>
						</div>
					</div>
				</div>
				<div className="mt-10 md:mt-12 flex items-center gap-4">
					<button
						onClick={() => {
							const el = document.querySelector("#carousel");
							if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
						}}
						className="grid h-12 w-12 place-items-center rounded-full border border-textlight/20 bg-accent/10 text-textlight transition-transform hover:-translate-y-1"
						aria-label="גלול למטה אל החלק הבא"
						type="button"
					>
						<ChevronDown className="h-7 w-7" strokeWidth={2} aria-hidden />
					</button>
				</div>
			</div>
		</section>
	);
}
