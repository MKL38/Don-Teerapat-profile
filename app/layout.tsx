import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teerapat-futhep.example.com"),
  title: "Teerapat Futhep — Project Manager & Business Development",
  description:
    "Strategic project management and business development across retail, digital commerce, and aviation. Currently Senior Business Development at Nok Air.",
  keywords: [
    "Teerapat Futhep",
    "Project Manager",
    "Business Development",
    "Nok Air",
    "CP Group",
    "Ascend Commerce",
    "CP Axtra",
  ],
  authors: [{ name: "Teerapat Futhep" }],
  openGraph: {
    title: "Teerapat Futhep — Project Manager & Business Development",
    description:
      "Strategic project management and business development across retail, digital commerce, and aviation.",
    type: "profile",
    images: ["/images/portrait-primary.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={interTight.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
