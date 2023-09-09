"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Navbar({
  navLinks,
  isMenuOpen,
  setIsMenuOpen,
  handleMouseEnter,
  handleMouseLeave,
}) {
  const pathname = usePathname();
  return (
    <>
      <nav
        className={
          "outline-primary-500 sticky top-0 flex h-screen w-24 flex-col items-center justify-between outline outline-1 transition-all" +
          (isMenuOpen ? "" : " -translate-x-24 ")
        }
      >
        <div
          className="bg-primary-700 flex h-24 w-24 cursor-pointer flex-col items-center justify-center self-start"
          onClick={() => setIsMenuOpen(false)}
        >
          <span>
            <Link href="/">F</Link>
          </span>
        </div>
        <ul className="flex h-auto flex-col items-center justify-between gap-8 self-center py-4 text-xs">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                scroll={false}
                href={link.href}
                key={link.name}
                className={
                  "flex flex-col items-center" +
                  (isActive ? " text-primary-500 " : " text-gray-500 ")
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon ? <link.icon className="text-4xl" /> : link.name}
                {link.icon && (
                  <span className="text-center text-xs">{link.name}</span>
                )}
              </Link>
            );
          })}
        </ul>
        <div className="flex h-24 w-24 flex-col items-center justify-center self-end">
          <span>E</span>
        </div>
      </nav>
      <div
        className={
          "sticky left-0 top-0 flex h-screen flex-col items-center justify-center transition-all" +
          (isMenuOpen ? "" : " -translate-x-24 ")
        }
      >
        <div
          className={
            "bg-primary-700 sticky left-0 top-0 h-screen transition-[width] duration-200 " +
            (isMenuOpen ? " w-1 " : " w-6 lg:w-4 ")
          }
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={() => setIsMenuOpen(true)}
        ></div>
      </div>
    </>
  );
}

export default Navbar;
