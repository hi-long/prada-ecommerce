import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prada Ecommerce",
  description: "Selling clothes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-[80px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
