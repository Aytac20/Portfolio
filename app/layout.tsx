import type { Metadata } from "next";
import "./globals.css";
import { Nova_Square } from "next/font/google";

const novaSquare = Nova_Square({
  subsets: ["latin"],
  weight: "400", // optional
  display: "swap", // optional
});
export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={novaSquare.className}>{children}</body>
    </html>
  );
}
