import Section from "./Section";

export default function AboutUs() {
	return (
		<Section
			id="carousel"
			title="מי אנחנו?"
			className="text-textlight"
		>
			<div className="mx-auto max-w-3xl space-y-6 text-right">
				<p>
					ברוכים הבאים ל"קופסה הנכונה" – אנחנו לא רק בונים זיווד לרכבי שטח,
					אנחנו יוצרים את החופש שלכם לטייל. אופל לוי, איש מקצוע עם ניסיון עשיר,
					הפך את התשוקה שלו לאומנות של זיווד רכבי שטח. הוא משלב ידע מעשי, אהבה
					לחומרי גלם ותשומת לב מלאה לפרטים, כדי להפוך כל ג'יפ לכלי הרפתקני
					ומאובזר בדיוק לפי צרכי הלקוח.
				</p>

				<h3 className="text-2xl font-bold text-center">
					המקצוענות שלנו – הפרטים הקטנים שעושים את ההבדל
				</h3>
				<p>
					אנחנו מתמחים בהפיכת רכב השטח שלכם לכלי קמפינג אולטימטיבי, מותאם אישית
					לכל הרפתקה. כל זיווד, כל מגירה וכל מערכת שאנו מתקינים, נבנית במטרה
					אחת: לאפשר לכם להגיע רחוק יותר, להישאר בנוח יותר וליהנות מהטבע הישראלי
					כמו שלא עשיתם מעולם.
				</p>

				<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
					<div className="rounded-xl border border-steel/30 bg-white p-4">
						<h4 className="font-semibold text-textlight">
							<span className="text-accent">✓</span> נגרות שטח
						</h4>
						<p className="text-sm text-steel">
							בניית מגירות אחסון מודולריות, זיווד מלא בעץ איכותי, ומטבחי שטח
							מובנים.
						</p>
					</div>
					<div className="rounded-xl border border-steel/30 bg-white p-4">
						<h4 className="font-semibold text-textlight">
							<span className="text-accent">✓</span> מערכות כוח מתקדמות
						</h4>
						<p className="text-sm text-steel">
							התקנת מצברים כפולים ומערכות חשמל מתקדמות כדי שלא תיתקעו לעולם.
						</p>
					</div>
					<div className="rounded-xl border border-steel/30 bg-white p-4">
						<h4 className="font-semibold text-textlight">
							<span className="text-accent">✓</span> פתרונות מים ואוויר
						</h4>
						<p className="text-sm text-steel">
							שילוב מערכות מים מתקדמות ומערכות פנאומטיות (קומפרסורים) לניפוח לחץ
							אוויר.
						</p>
					</div>
				</div>

				<p>
					לצד המקצועיות של אופל, הקופסה הנכונה גאה בשותפות עם ארז 4x4, אחד
					ממוסכי הג'יפים המובילים והמוכרים בישראל. שיתוף הפעולה הזה מבטיח לכם
					שילוב של מומחיות מכנית לצד פתרונות זיווד ברמה הגבוהה ביותר.
				</p>
			</div>
		</Section>
	);
}
