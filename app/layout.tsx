import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav/Nav";

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
      <body className="bg-white text-black">
        <Nav />
        <main className="container mx-auto h-full">{children}</main>
      </body>
    </html>
  );
}
