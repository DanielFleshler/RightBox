import heroBackgroundImage from "@/app/herosection_background.png";
import { ChevronDown, HelpingHand, Settings, ShieldCheck } from "lucide-react";
import React from "react";

export default function HeroSection() {
	return (
		<section
			id="home"
			className="relative min-h-[100dvh] overflow-hidden bg-brandbg bg-cover bg-no-repeat bg-center flex items-center md:items-start pt-10 sm:pt-12 md:pt-12 text-textlight"
			style={{
				backgroundImage: `url(${heroBackgroundImage.src})`,
			}}
		>
			<div className="absolute inset-0 bg-black/60" />

			<div className="container relative z-10 mx-auto w-full px-4 flex flex-col items-center justify-center">
				<div className="mx-auto flex max-w-3xl flex-col items-center gap-6 md:gap-8 text-center">
					<div>
						<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#eaecef] leading-tight">
							הקופסה <span className="text-accent">הנכונה</span>
						</h1>
						<div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-sand" />
					</div>

					<p className="max-w-[50ch] text-base sm:text-lg md:text-xl text-white/90 font-medium">
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
							<div className="font-bold text-lg text-white">
								אחריות לכל החיים
							</div>
							<div className="text-sm text-white/80">נבנה לעמידות מקסימלית</div>
						</div>
					</div>

					{/* Feature 2: Full Customization */}
					<div className="flex flex-row-reverse items-center gap-4 text-right">
						<Settings
							className="h-10 w-10 text-white flex-shrink-0"
							aria-hidden
						/>
						<div>
							<div className="font-bold text-lg text-white">
								התאמה אישית מלאה
							</div>
							<div className="text-sm text-white/80">
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
							<div className="font-bold text-lg text-white">תמיכה מקצועית</div>
							<div className="text-sm text-white/80">ליווי והתקנה בשטח</div>
						</div>
					</div>
				</div>
				<div></div>
				<a
					href="#carousel"
					className="absolute bottom-[-180px] left-1/2 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full border border-white/20 bg-accent/10 text-textlight transition-transform hover:-translate-y-1 animate-bounce"
					aria-label="גלול למטה אל החלק הבא"
				>
					<ChevronDown className="h-7 w-7" strokeWidth={2} aria-hidden />
				</a>
			</div>
		</section>
	);
}
