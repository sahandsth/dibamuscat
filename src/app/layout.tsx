import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diba Beauty Lounge | Grand Millennium Muscat",
  description:
    "Premium beauty salon at Grand Millennium Muscat. Lashes, nails, pedicure, hair styling, and full beauty services.",
  keywords: [
    "Diba beauty Grand Millennium",
    "beauty salon Muscat",
    "lashes Oman",
    "nails Muscat",
    "Grand Millennium salon",
  ],
  openGraph: {
    title: "Diba Beauty Lounge | Grand Millennium Muscat",
    description: "Lashes, nails, hair & full glam at Grand Millennium Muscat.",
    type: "website",
    locale: "en_OM",
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "instagram:site": `@${site.instagram.handle}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#3d2430",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
