import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "This is my blog website",
  description: "Luxxtech this is website that offer tech solution",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>)
 {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
