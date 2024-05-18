import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from 'next/font/google'
import "./globals.css";
import "./typefaces.css";

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: [
    "400",
    "500",
    "600"
  ]
})

export const metadata: Metadata = {
  title: "Syukuran khitanan Muhammad Fahmi Adila",
  description: "Muhammad Fahmi Adila - 25 Juni 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto_mono.variable}`}>{children}</body>
    </html>
  );
}
