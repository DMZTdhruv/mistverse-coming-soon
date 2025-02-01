import type { Metadata } from "next";
import "./globals.css";
import { clgkFont } from "@/components/font";
import { cldsFont } from "@/components/font";

export const metadata: Metadata = {
  title: "Mistverse",
  description:
    "BlockChain powered Marketplace for AI models, agents and Digital art",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${clgkFont.variable} ${cldsFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
