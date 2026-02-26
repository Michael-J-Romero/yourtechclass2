import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YourTechClass – Afterschool Coding at LA Libraries",
  description:
    "Free afterschool coding groups at local Los Angeles libraries. Multiple locations across LA County. One-on-one lessons also available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
