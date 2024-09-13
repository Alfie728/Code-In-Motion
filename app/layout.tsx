import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Nav from "@/components/Nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code in Motion",
  description:
    "Where code comes alive: A rhythmic showcase of web animations and interactive designs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black`}>
        <Nav />
        <main className="container mx-auto h-full">{children}</main>
      </body>
    </html>
  );
}
