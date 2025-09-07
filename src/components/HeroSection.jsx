import heroBg from "@/app/herosection_background.png";

export default function HeroSection() {
	return (
		<section
			id="home"
			className="relative min-h-[100dvh] overflow-hidden bg-brandbg bg-cover bg-no-repeat [background-blend-mode:multiply] bg-[position:50%_25%] md:bg-[position:50%_50%] flex items-start md:items-start pt-10 sm:pt-12 md:pt-12 text-textlight"
			style={{ backgroundImage: `url(${heroBg.src})` }}
		>
			{/* Glow + dark overlay (improves readability on busy images) */}
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,122,26,0.10)_0%,transparent_70%)]" />
			<div className="pointer-events-none absolute inset-0 bg-black/30 md:bg-black/20 mix-blend-multiply" />

			<div className="container relative z-10 mx-auto w-full px-4">
				<div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
					<div>
						<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#eaecef] leading-tight">
							הקופסה <span className="text-accent">הנכונה</span>
						</h1>
						<div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-sand" />
					</div>

					<p className="max-w-[50ch] text-base sm:text-lg md:text-xl text-muted/90">
						ציוד פרימיום לחובבי שטח שמבקשים אמינות, עמידות ונוחות — מותאם לכל
						תנאי השטח בישראל.
					</p>

					<div className="grid w-full max-w-[1200px] grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 items-start justify-items-center">
						{/* Feature 1 */}
						<div className="flex flex-row-reverse items-center gap-3 text-right w-[22rem] max-w-full sm:w-full">
							<span
								className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full border-2 bg-accent/10 text-accent border-accent/30"
								aria-hidden
							>
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12 3l8 4v5c0 5-3.5 9-8 9s-8-4-8-9V7l8-4Z"
										stroke="currentColor"
										strokeWidth="2"
									/>
									<path
										d="M9 12l2 2 4-4"
										stroke="currentColor"
										strokeWidth="2"
									/>
								</svg>
							</span>
							<div>
								<div className="font-bold">אחריות לכל החיים</div>
								<div className="text-sm text-muted">נבנה לעמידות מקסימלית</div>
							</div>
						</div>

						{/* Feature 2 */}
						<div className="flex flex-row-reverse items-center gap-3 text-right w-[22rem] max-w-full sm:w-full">
							<span
								className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full border-2 bg-sand/10 text-sand border-sand/30"
								aria-hidden
							>
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M4 5v14M12 3v18M20 7v10"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
									/>
									<circle
										cx="4"
										cy="9"
										r="2"
										stroke="currentColor"
										strokeWidth="2"
									/>
									<circle
										cx="12"
										cy="15"
										r="2"
										stroke="currentColor"
										strokeWidth="2"
									/>
									<circle
										cx="20"
										cy="11"
										r="2"
										stroke="currentColor"
										strokeWidth="2"
									/>
								</svg>
							</span>
							<div>
								<div className="font-bold">התאמה אישית מלאה</div>
								<div className="text-sm text-muted">
									תכנון וייצור לפי הרכב והצרכים
								</div>
							</div>
						</div>

						{/* Feature 3 */}
						<div className="flex flex-row-reverse items-center gap-3 text-right w-[22rem] max-w-full sm:w-full">
							<span
								className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full border-2 bg-accent/10 text-accent border-accent/30"
								aria-hidden
							>
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M7 14l5-5m2 7l-2-2M6 7l3 3"
										stroke="currentColor"
										strokeWidth="2"
									/>
									<path
										d="M20 14v5h-5M4 10V5h5"
										stroke="currentColor"
										strokeWidth="2"
									/>
								</svg>
							</span>
							<div>
								<div className="font-bold">תמיכה מקצועית</div>
								<div className="text-sm text-muted">ליווי והתקנה בשטח</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<a
				href="#carousel"
				className="absolute bottom-20 left-1/2 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full border border-white/20 bg-accent/10 text-textlight transition-transform hover:-translate-y-1 animate-bounce"
				aria-label="גלול למטה אל החלק הבא"
			>
				<svg
					width="28"
					height="28"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden
				>
					<path
						d="M6 9l6 6 6-6"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</a>
		</section>
	);
}
