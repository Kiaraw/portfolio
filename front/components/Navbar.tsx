"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";

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
    const w = 2.5; // largeur du switch en rem (~40px)
    const h = 1.25; // hauteur du switch en rem (~20px)
    const circle = 1.25; // diamètre du rond

    return (
      <Switch
        checked={darkMode}
        onCheckedChange={toggleDarkMode}
        className="relative bg-[#F5F5DC] dark:bg-[#2F494F] rounded-full transition-colors duration-300 inline-flex items-center p-0.5"
        style={{ width: `${w}rem`, height: `${h}rem` }}
      >
        <span
          className="absolute flex items-center justify-center rounded-full transition-transform duration-300"
          style={{
            width: `${circle}rem`,
            height: `${circle}rem`,
            transform: darkMode
              ? `translateX(${w - circle - 0.125}rem)`
              : "translateX(0)",
            backgroundColor: darkMode ? "#1E40AF" : "#FACC15", // bleu nuit ou jaune soleil
          }}
        >
          <Image
            src={darkMode ? "/moon.svg" : "/sun.svg"}
            alt={darkMode ? "Lune" : "Soleil"}
            width={16}
            height={16}
          />
        </span>
      </Switch>
    );
  };

  return (
    <nav className="bg-[#2F494F] text-[#F5F5DC] px-6 py-4 flex items-center justify-between">
      <div className="text-xl font-bold">MonPortfolio</div>

      {/* Menu desktop */}
      <ul className="hidden md:flex items-center space-x-6">
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/projets">Projets</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><ThemeSwitch /></li>
      </ul>

      {/* Mobile */}
      <div className="flex items-center md:hidden space-x-4">
        <ThemeSwitch />
        <button className="text-[#6FC18A]" onClick={toggleMenu}>☰</button>
      </div>

      {/* Mobile menu */}
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
