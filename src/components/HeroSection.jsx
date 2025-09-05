import Image from "next/image";
export default function HeroSection() {
	return (
		<section id="home" className="section hero-section">
			<div className="container hero-content" aria-label="אזור פתיח">
				<h1 className="hero-title">
					הקופסה <span className="hero-emphasis">הנכונה</span>
				</h1>

				<p className="hero-subtitle">
					ציוד פרימיום לחובבי שטח שמבקשים אמינות, עמידות ונוחות — מותאם לכל תנאי
					השטח בישראל.
				</p>

				<div className="hero-features">
					<div className="hero-feature">
						<span className="icon-badge orange" aria-hidden>
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
								<path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" />
							</svg>
						</span>
						<div>
							<div className="feature-title">אחריות לכל החיים</div>
							<div className="feature-sub">נבנה לעמידות מקסימלית</div>
						</div>
					</div>
					<div className="hero-feature">
						<span className="icon-badge sand" aria-hidden>
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
							<div className="feature-title">התאמה אישית מלאה</div>
							<div className="feature-sub">תכנון וייצור לפי הרכב והצרכים</div>
						</div>
					</div>
					<div className="hero-feature">
						<span className="icon-badge orange" aria-hidden>
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
							<div className="feature-title">תמיכה מקצועית</div>
							<div className="feature-sub">ליווי והתקנה בשטח</div>
						</div>
					</div>
				</div>
			</div>

			<a
				href="#carousel"
				className="hero-scroll animate-bounce"
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
