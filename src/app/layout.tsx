import type { Metadata } from "next";
import { Cabin, Inter } from "next/font/google";
import "./globals.css";
import WebWrapper from "./webWrapper";

const inter = Cabin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Momento",
  description: "The modern finance platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WebWrapper> {children}</WebWrapper>
      </body>
    </html>
  );
}
