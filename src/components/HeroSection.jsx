import Image from "next/image";
import logo from "../app/therightbox_logo.png";

export default function HeroSection() {
	return (
		<section id="home" className="section hero-section">
			<div className="container hero-content" aria-label="אזור פתיח">
				<div className="hero-logo" aria-label="The Right Box Logo">
					<Image
						src={logo}
						alt="The Right Box — לוגו"
						priority
						style={{ width: "min(320px, 60vw)", height: "auto" }}
					/>
				</div>
				<p className="hero-subtitle">
					ציוד פרימיום לחובבי שטח שמבקשים אמינות, עמידות ונוחות — מותאם לכל תנאי
					השטח בישראל.
				</p>

				<div className="hero-ctas">
					<a className="btn btn-primary" href="#products">
						<svg
							aria-hidden
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
								stroke="currentColor"
								strokeWidth="2"
							/>
							<path
								d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1 .6 1.65 1.65 0 0 0-.33 1.82l.03.07a2 2 0 1 1-3.4 0l.03-.07A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-.6-1 1.65 1.65 0 0 0-1.82-.33l-.07.03a2 2 0 1 1 0-3.4l.07.03A1.65 1.65 0 0 0 4.6 9c0-.39-.14-.78-.4-1.09a1.65 1.65 0 0 0-1-.6l-.07-.03a2 2 0 1 1 3.4 0l.07.03c.39.1.73.31 1 .6.29.32.4.7.4 1.09.39 0 .78-.14 1.09-.4.29-.31.5-.61.6-1l.03-.07a2 2 0 1 1 3.4 0l-.03.07c-.1.39-.31.73-.6 1-.31.26-.7.4-1.09.4 0 .39.14.78.4 1.09.31.29.61.5 1 .6l.07.03a2 2 0 1 1 0 3.4l-.07-.03c-.39-.1-.73-.31-1-.6-.26-.31-.4-.7-.4-1.09-.39 0-.78.14-1.09.4-.29.31-.5.61-.6 1l-.03.07a2 2 0 1 1-3.4 0l.03-.07c.1-.39.31-.73.6-1 .31-.26.7-.4 1.09-.4Z"
								stroke="currentColor"
								strokeWidth="1.4"
							/>
						</svg>
						קנה ציוד ליבה
					</a>
					<a className="btn btn-outline-primary" href="#contact">
						<svg
							aria-hidden
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"
								stroke="currentColor"
								strokeWidth="2"
							/>
						</svg>
						בקשת הצעת מחיר
					</a>
				</div>

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

			{/* Scroll-down indicator to next section */}
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
