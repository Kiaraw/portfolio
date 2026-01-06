"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const ThemeSwitch = () => {
    const w = 40; // largeur en px
    const h = 20; // hauteur en px
    const circle = 20; // diamètre du rond

    return (
      <SwitchPrimitive.Root
        checked={darkMode}
        onCheckedChange={toggleDarkMode}
        className="relative rounded-full transition-colors duration-300 cursor-pointer"
        style={{
          width: w,
          height: h,
          backgroundColor: darkMode ? "#252525ff" : "#ffffffff",
        }}
      >
        <span
          className="absolute top-0 left-0 flex items-center justify-center rounded-full transition-all duration-300"
          style={{
            width: circle,
            height: circle,
            transform: darkMode ? `translateX(${w - circle}px)` : "translateX(0px)",
            backgroundColor: darkMode ? "#ffffffff" : "#ffffffff",
          }}
        >
          <Image
            src={darkMode ? "/moon.png" : "/sun.png"}
            alt={darkMode ? "Lune" : "Soleil"}
            width={16}
            height={16}
          />
        </span>
      </SwitchPrimitive.Root>
    );
  };

  return (
    <nav className="bg-[#2F494F] text-[#F5F5DC] px-6 py-4 flex items-center justify-between">
      <div className="text-xl font-bold">MonPortfolio</div>

      <ul className="hidden md:flex items-center space-x-6">
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/projets">Projets</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><ThemeSwitch /></li>
      </ul>

      <div className="flex items-center md:hidden space-x-4">
        <ThemeSwitch />
        <button className="text-[#6FC18A]" onClick={() => setIsOpen(!isOpen)}>☰</button>
      </div>

      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-[#2F494F] flex flex-col items-center py-4 space-y-4 md:hidden">
          <li><Link href="/" onClick={() => setIsOpen(false)}>Accueil</Link></li>
          <li><Link href="/projets" onClick={() => setIsOpen(false)}>Projets</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
