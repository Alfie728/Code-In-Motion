import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { animations } from "@/components/data";

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
        <nav className="border-b border-gray-200 py-4">
          <ul className="flex justify-center space-x-6">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            {
              animations.map((animation) => (
                <li key={animation.path}>
                  <Link href={animation.path} className="hover:underline">
                    {animation.shortName}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
        <main className="container mx-auto h-full">{children}</main>
      </body>
    </html>
  );
}
