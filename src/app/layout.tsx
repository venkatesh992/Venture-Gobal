import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const display = Plus_Jakarta_Sans({
  variable: "--font-display-face",
  subsets: ["latin"],
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans-face",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VG Recruitment Agency — Your Gateway to Global Careers",
    template: "%s | VG Recruitment Agency",
  },
  description:
    "VG Recruitment Agency connects skilled professionals with top international employers. Find overseas jobs, training courses, and expert guidance for your global career journey.",
  keywords: [
    "recruitment agency",
    "overseas jobs",
    "international employment",
    "job placement",
    "training courses",
    "visa assistance",
    "career abroad",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "VG Recruitment Agency",
    title: "VG Recruitment Agency — Your Gateway to Global Careers",
    description:
      "Connect with top international employers. Find overseas jobs, training, and expert career guidance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
