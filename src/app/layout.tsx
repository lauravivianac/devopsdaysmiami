import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SponsorModalProvider } from "@/context/SponsorModalContext";
import SponsorModal from "@/components/SponsorModal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevOpsDays Miami — Coming Soon",
  description:
    "DevOpsDays is coming to Miami. A community-driven tech event on DevOps, Platform Engineering, Cloud, SRE, AI for Engineering, FinOps and Security. Join the waitlist.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png",    type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "DevOpsDays Miami — Coming Soon",
    description:
      "Where DevOps, Platform Engineering, Cloud, AI and engineering leadership meet. Miami.",
    url: "https://devopsdaysmiami.com",
    siteName: "DevOpsDays Miami",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOpsDays Miami — Coming Soon",
    description:
      "A community-driven tech event is taking shape in Miami. Join the waitlist.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`} style={{ background:"#ffffff" }}>
        <SponsorModalProvider>
          {children}
          <SponsorModal />
        </SponsorModalProvider>
      </body>
    </html>
  );
}
