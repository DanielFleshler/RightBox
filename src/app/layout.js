import Navbar from "@/components/Navbar";
import { Heebo } from "next/font/google";
import "./globals.css";

export const metadata = {
    title: "הקופסה הנכונה – זיווד וציוד שטח מקצועי",
    description:
        "זיווד מקצועי לרכבי שטח, מגירות אחסון, מערכות כוח, מים ואוויר – מותאם אישית בישראל.",
    icons: {
        icon: "/favicon.svg",
    },
    openGraph: {
        title: "הקופסה הנכונה – זיווד וציוד שטח מקצועי",
        description:
            "זיווד מקצועי לרכבי שטח, מגירות אחסון, מערכות כוח, מים ואוויר – מותאם אישית בישראל.",
        locale: "he_IL",
        type: "website",
    },
};

const heebo = Heebo({
	subsets: ["hebrew", "latin"],
	variable: "--font-ui",
	weight: ["400", "500", "700", "800"],
	display: "swap",
});

export default function RootLayout({ children }) {
	return (
		<html lang="he" dir="rtl">
            <body
                className={`${heebo.variable} font-[var(--font-ui)] bg-brandbg text-textlight antialiased`}
            >
                <Navbar />
                <main className="pt-0 bg-workshop/0">{children}</main>
            </body>
		</html>
	);
}
