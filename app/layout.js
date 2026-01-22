import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://shoaib-hassan-portfolio.vercel.app/"),
  title: "Shoaib Hassan | Google Ads Expert",
  description:
    "Maximize your ROAS with data-driven Google Ads strategies. Managed $400K+ across global markets.",
  keywords: [
    "Google Ads Expert",
    "PPC Specialist",
    "Digital Marketing",
    "Shoaib Hassan",
    "Google Ads Consultant",
    "Performance Marketing",
  ],
  openGraph: {
    title: "Shoaib Hassan | Google Ads Expert",
    description:
      "Maximize your ROAS with data-driven Google Ads strategies. Managed $400K+ across global markets.",
    url: "https://shoaib-hassan-portfolio.vercel.app/",
    siteName: "Shoaib Hassan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shoaib Hassan - Google Ads Expert",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoaib Hassan | Google Ads Expert",
    description:
      "Maximize your ROAS with data-driven Google Ads strategies. Managed $400K+ across global markets.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
