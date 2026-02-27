import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YourTechClass - Creative Coding Programs for Kids & Teens",
  description:
    "Students learn programming by building games and interactive projects in small, supportive environments. Small group programs, one-on-one coaching, and workshops for ages 8-16 across Los Angeles.",
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
