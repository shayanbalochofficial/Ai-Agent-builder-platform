import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";

export const metadata: Metadata = {
  title: "Ai Agent Builder Platform",
  description: "Made by Shayan - No Ai Used",
};

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
