import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coup - iMessage Automation Tool",
  description: "iMessage Automation for Teams and AI Workflows",
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