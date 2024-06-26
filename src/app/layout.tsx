import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Scoll from '@/components/Scoll'

// const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "This is my blog website",
  description: "Get-Solution this is website that offer tech solution",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>)
 {
  
  return (
    <html lang="en">
      <body>
        <Scoll/>
        <Navbar/>
        <main className="p-5">
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  );
}
