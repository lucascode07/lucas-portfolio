import Script from "next/script";
import type { Metadata } from "next";
import { poppins, roboto_slab } from "@/utils/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucas Portfolio",
  description:
    "Professional portfolio, where Lucas Barrenechea show his experience as a frontend developer, and the works he has done",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto_slab.variable} ${poppins.variable}`}>
        {children}
        <Script src="https://kit.fontawesome.com/2d65cb08f6.js"></Script>
      </body>
    </html>
  );
}
