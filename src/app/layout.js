import Navbar from "@/components/Navbar";
import { Heebo } from "next/font/google";
import "./globals.css";

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
				<main className="pt-16">{children}</main>
			</body>
		</html>
	);
}
