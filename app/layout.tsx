import type { Metadata } from "next";
import { Oxanium, Inter } from "next/font/google";
import "./globals.css";

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hades Hot Sauce — Small Batch. Not For Sale.",
  description: "Handcrafted hot sauce forged in the fires of Boston. You can't buy it. You have to earn it.",
  openGraph: {
    title: "Hades Hot Sauce",
    description: "Small batch. Not for sale. Forged in Boston.",
    images: ["/bottles-lineup.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${inter.variable}`}>
      <body className="bg-hades-black text-white font-body antialiased">
        {children}
      </body>
    </html>
  );
}
