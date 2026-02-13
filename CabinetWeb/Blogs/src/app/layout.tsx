import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Cabination Blog | Kitchen Design & Cabinet Guides",
    template: "%s | The Cabination Blog",
  },
  description:
    "Kitchen design ideas, cabinet guides, and planning tips. Your resource for kitchen renovation, cabinet selection, and remodeling expertise.",
  openGraph: {
    title: "The Cabination Blog | Kitchen Design & Cabinet Guides",
    description:
      "Kitchen design ideas, cabinet guides, and planning tips. Your resource for kitchen renovation and cabinet selection.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
