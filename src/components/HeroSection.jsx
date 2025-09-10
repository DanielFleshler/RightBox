"use client";
import heroBackgroundImage from "@/app/hero_background.jpg";
import { ChevronDown, HelpingHand, Settings, ShieldCheck } from "lucide-react";
import React from "react";

export default function HeroSection() {
	return (
		<section
			id="home"
			className="relative isolate overflow-hidden text-textlight min-h-[100svh] sm:min-h-[100svh]"
		>
			{/* Background image and soft wash */}
			<div
				className="absolute inset-0 -z-10 bg-cover bg-center"
				style={{ backgroundImage: `url(${heroBackgroundImage.src})` }}
			/>
			<div
				className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(47,111,62,0.20),transparent),radial-gradient(800px_400px_at_10%_20%,rgba(15,23,42,0.12),transparent)]"
				aria-hidden
			/>
			<div className="absolute inset-0 -z-10 overlay-light" aria-hidden />

			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-8 sm:pb-12 text-center">
				<h1 className="text-4xl sm:text-6xl font-black tracking-tight uppercase heading-stamp">
					זיווד וציוד שטח <span className="text-accent">מותאם אישית</span>
				</h1>
				<p className="mx-auto mt-4 max-w-[55ch] text-lg text-steel">
					מגירות, מערכות כוח, מים ואוויר – בנייה חכמה, חזקה ומדויקת לצרכים שלכם.
				</p>

				{/* Feature Row */}
				<div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
					{[
						{
							icon: (
								<ShieldCheck
									className="w-8 h-8 text-accent text-center"
									aria-hidden
								/>
							),
							title: "אחריות לכל החיים",
							sub: "חומרים פרימיום ודיוק בבנייה",
						},
						{
							icon: (
								<Settings
									className="w-8 h-8 text-accent text-center"
									aria-hidden
								/>
							),
							title: "התאמה אישית מלאה",
							sub: "תכנון וייצור לפי הרכב",
						},
						{
							icon: (
								<HelpingHand
									className="w-8 h-8 text-accent text-center"
									aria-hidden
								/>
							),
							title: "ליווי ותמיכה",
							sub: "מהתכנון ועד ההתקנה",
						},
					].map((f, i) => (
						<div
							key={i}
							className="flex flex-col items-center text-center gap-3 rounded-xl border border-steel/30 bg-white/60 p-4 shadow-sm"
						>
							{f.icon}
							<div className="max-w-[24ch]">
								<div className="font-semibold">{f.title}</div>
								<div className="text-sm text-steel">{f.sub}</div>
							</div>
						</div>
					))}
				</div>
				<div className="mt-8 flex justify-center gap-4" dir="rtl">
					{/* Mobile only: contact button */}
					<a href="#contact" className="btn btn-secondary md:hidden">
						דברו איתנו
					</a>
					{/* Desktop only: scroll chevron */}
					<button
						onClick={() => {
							const el = document.querySelector("#carousel");
							if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
						}}
						className="hidden md:grid h-12 w-12 place-items-center rounded-full border border-textlight/20 bg-accent/10 text-textlight transition-transform hover:-translate-y-1"
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
