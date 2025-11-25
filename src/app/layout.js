

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "@/Components/Navber/Navber";
import Footer from "@/Components/Footer/Footer";
import AuthProvider from "@/Context/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "welcome here ",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        

        <AuthProvider>
              <Navber></Navber>
            {children}
              <Footer />
        </AuthProvider>
     
      </body>
    </html>
  );
}
