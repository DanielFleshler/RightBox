import { Mail, MapPin, Phone } from "lucide-react";
import Section from "./Section";

export default function ContactSection() {
	return (
		<Section id="contact" className="bg-[#e9e9e9] text-darkslate">
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
							<Phone className="h-5 w-5" aria-hidden />
						</span>
						<span className="text-lg font-medium">כאן יבוא מספר פלאפון</span>
					</a>

					{/* Email */}
					<a
						href="mailto:shop@example.com"
						className="flex items-center gap-3 hover:text-accent transition-colors"
					>
						<span className="grid h-9 w-9 place-items-center rounded-md border border-accent/50 text-accent">
							<Mail className="h-5 w-5" aria-hidden />
						</span>
						<span className="text-lg font-medium">כאן יבוא אימייל</span>
					</a>

					{/* Location */}
					<div className="flex items-center gap-3">
						<span className="grid h-9 w-9 place-items-center rounded-md border border-accent/50 text-accent">
							<MapPin className="h-5 w-5" aria-hidden />
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
						בואו נבנה את הקופסה שלכם
					</a>
				</div>
			</div>
		</Section>
	);
}
