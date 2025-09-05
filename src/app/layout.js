import "./globals.css";
import Navbar from "../components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${inter.variable}`}>
        <Navbar />
        <main className="page">{children}</main>
      </body>
    </html>
  );
}
