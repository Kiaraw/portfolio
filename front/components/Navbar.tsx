"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const ThemeSwitch = () => {
    const w = 40;
    const h = 20;
    const circle = 20;

    return (
      <SwitchPrimitive.Root
        checked={darkMode}
        onCheckedChange={() => setDarkMode(!darkMode)}
        className="relative rounded-full cursor-pointer transition-colors duration-300"
        style={{
          width: w,
          height: h,
          backgroundColor: darkMode ? "#252525" : "#ffffff",
        }}
      >
        <span
          className="absolute top-0 left-0 flex items-center justify-center rounded-full transition-all duration-300"
          style={{
            width: circle,
            height: circle,
            transform: darkMode
              ? `translateX(${w - circle}px)`
              : "translateX(0px)",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Image
            src={darkMode ? "/moon.png" : "/sun.png"}
            alt="theme icon"
            width={16}
            height={16}
          />
        </span>
      </SwitchPrimitive.Root>
    );
  };

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-md
        bg-white/40 dark:bg-black/40
        border-b border-gray-200/60 dark:border-white/10
        shadow-sm
        px-6 py-4
        flex items-center justify-between
        text-gray-900 dark:text-gray-100
      "
    >
      {/* Titre */}
      <div className="text-xl font-semibold relative left-4">
        Kiara Wurtz
      </div>

      {/* Desktop */}
      <ul className="hidden md:flex items-center space-x-6 relative right-4">
        <li className="hover:opacity-70 transition">
          <a href="#about">À propos</a>
        </li>
        <li className="hover:opacity-70 transition">
          <a href="#projects">Projets</a>
        </li>
        <li className="hover:opacity-70 transition">
          <a href="#contact">Contact</a>
        </li>
        <li>
          <ThemeSwitch />
        </li>
      </ul>

      {/* Mobile */}
      <div className="flex items-center md:hidden space-x-4">
        <ThemeSwitch />
        <button
            className="text-gray-700 dark:text-gray-300 text-xl"
            onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul
          className="
            absolute top-full left-0 w-full
            backdrop-blur-md
            bg-white/80 dark:bg-black/80
            border-b border-gray-200 dark:border-white/10
            flex flex-col items-center py-4 space-y-4
            md:hidden
          "
        >
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              À propos
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projets
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
