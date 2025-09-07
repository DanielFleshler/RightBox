import Section from "./Section";

export default function ContactSection() {
	return (
		<Section id="contact" className="bg-[#F9FAFB] text-darkslate">
			<div className="mx-auto max-w-4xl text-center">
				<h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wide uppercase text-steel">
					מוכנים להתחיל לבנות?
				</h2>

				<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center text-steel">
					{/* Phone */}
					<a
						href="tel:+972500000000"
						className="flex items-center gap-3 hover:text-accent transition-colors"
					>
						<span className="grid h-9 w-9 place-items-center rounded-md border border-accent/50 text-accent">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="22"
								height="22"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								aria-hidden
							>
								<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.89.31 1.76.57 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.14a2 2 0 0 1 2.11-.45c.84.26 1.71.45 2.6.57A2 2 0 0 1 22 16.92Z" />
							</svg>
						</span>
						<span className="text-lg font-medium">כאן יבוא מספר פלאפון</span>
					</a>

					{/* Email */}
					<a
						href="mailto:shop@example.com"
						className="flex items-center gap-3 hover:text-accent transition-colors"
					>
						<span className="grid h-9 w-9 place-items-center rounded-md border border-accent/50 text-accent">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="22"
								height="22"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								aria-hidden
							>
								<path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
								<path d="m22 6-10 7L2 6" />
							</svg>
						</span>
						<span className="text-lg font-medium">כאן יבוא אימייל</span>
					</a>

					{/* Location */}
					<div className="flex items-center gap-3">
						<span className="grid h-9 w-9 place-items-center rounded-md border border-accent/50 text-accent">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="22"
								height="22"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								aria-hidden
							>
								<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0Z" />
								<circle cx="12" cy="10" r="3" />
							</svg>
						</span>
						<span className="text-lg font-medium">
							כאן יבוא מיקום(נראלי זה היוגב 16)
						</span>
					</div>
				</div>

				<div className="mt-10">
					<a
						href="mailto:build@steelgrit.com"
						className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-4 text-white font-extrabold uppercase tracking-wide shadow-md hover:bg-accent/90 transition-colors"
					>
						Start your project
					</a>
				</div>
			</div>
		</Section>
	);
}
