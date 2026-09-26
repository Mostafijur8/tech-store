import type { Metadata } from "next";

import { ShopProvider } from "@/context/ShopProvider";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Tech Store",
  description: "A beginner Context practice project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ShopProvider>
         <Navbar/>
          {children}
          <Footer/>
        </ShopProvider>
      </body>
    </html>
  );
}