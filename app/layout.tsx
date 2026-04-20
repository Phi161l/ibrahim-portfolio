import type { Metadata } from "next";
import { SiteShell } from "./_components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ibrahim Muhaba | Full-Stack Developer",
  description: "Building fast, scalable web and mobile apps",
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
