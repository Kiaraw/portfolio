"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        min-h-screen flex items-center
        bg-gradient-to-br
        from-[#A7C7E7] via-[#9ED9C8] to-[#FFF1B8]
        dark:from-[#1E293B] dark:via-[#134E4A] dark:to-[#020617]
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-7xl mx-auto px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >

        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-base text-gray-800 dark:text-gray-300">
              Bonjour, je suis
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white">
              Kiara Wurtz
            </h1>
          </div>

          <p className="text-base text-gray-800 dark:text-gray-300 max-w-md">
            Étudiante en 3e année à Epitech Digital, spécialisée en gestion de
            projet et conception de solutions digitales.
          </p>

          <p className="text-base text-gray-800 dark:text-gray-300">
            À la recherche d’une alternance pour <strong>Janvier 2026</strong>
          </p>

          <div className="flex gap-4 pt-4">
            <a
            href="#projects"
            className="
              px-6 py-2 rounded-full
              bg-white/90 dark:bg-white/10
              text-sm font-medium
              shadow transition-all
              hover:-translate-y-0.5 hover:shadow-md
              inline-flex items-center
            "
          >
            Voir mes projets
          </a>

            <a
              href="/Kiara_Wurtz_CV.pdf"
              download
              className="px-6 py-2 rounded-full bg-white/90 dark:bg-white/10 text-sm font-medium shadow transition-all hover:-translate-y-0.5 hover:shadow-md inline-flex items-center"
            >
              Télécharger mon CV
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm aspect-square overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/hero.png"
              alt="Photo de Kiara Wurtz"
              fill
              className="object-cover object-[50%_20%]"
              priority
            />
          </div>
        </div>

      </motion.div>
    </section>
  );
}
