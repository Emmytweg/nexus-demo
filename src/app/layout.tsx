import  { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
// import LiquidCursor from './components/LiquidCursor'
import Nav from './components/Nav';
import SplashCursor from "./components/SplashCursor.jsx";
import Preloader from './components/Preloader'
const montserrat = Montserrat({
  // variable: "--font-roboto", // Changed to match Roboto
  subsets: ["latin"],
  display: 'swap',
  weight: ["400", "500", "700"], // Optional: specify weights if needed
});

export const metadata: Metadata = {
  title: "NEXUS",
  description: "DemoType by TwegX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="antialiased font-sans">
       <Preloader />
        <SplashCursor />
            <Nav />
        {children}
      </body>
    </html>
  );
}
