"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import { useState, useRef } from "react";
import { FaHouseChimney, FaCircleQuestion } from 'react-icons/fa6'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fezalion",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuHoverTimerRef = useRef(null);
  const overlayHoverTimerRef = useRef(null);

  const menuHandleMouseEnter = () => {
    menuHoverTimerRef.current = setTimeout(() => {
      setIsMenuOpen(true);
    }, 300);
  };

  const overlayHandleMouseEnter = () => {
    overlayHoverTimerRef.current = setTimeout(() => {
      setIsMenuOpen(false);
    }, 300);
  };

  const menuHandleMouseLeave = () => {
    clearTimeout(menuHoverTimerRef.current);
  };

  const overlayHandleMouseLeave = () => {
    clearTimeout(overlayHoverTimerRef.current);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={"flex flex-1 absolute"}>
          <Navbar
            navLinks={[
              { href: "/", name: "Home", icon: FaHouseChimney },
              { href: "/About", name: "About", icon: FaCircleQuestion },
              { href: "/doesntexist", name: "404" },
            ]}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            handleMouseEnter={menuHandleMouseEnter}
            handleMouseLeave={menuHandleMouseLeave}
          />
          <section
            className={
              "transition-all" + (isMenuOpen ? "" : " -translate-x-24 ")
            }
          >
            <div className={"bg-black w-full h-screen fixed transition-opacity" + (isMenuOpen ? " opacity-90 " : " opacity-0 ")}
              onMouseEnter={overlayHandleMouseEnter}
              onMouseLeave={overlayHandleMouseLeave}
              onTouchStart={() => isMenuOpen ? setIsMenuOpen(!isMenuOpen) : ""}>
            </div> 
            {children}           
          </section>
        </main>
      </body>
    </html>
  );
}
