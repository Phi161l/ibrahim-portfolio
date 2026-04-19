import type { Metadata } from "next";
import { SiteShell } from "./_components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio Terminal",
  description: "Creative hacker-inspired portfolio for a full-stack and Flutter developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
