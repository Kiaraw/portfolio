import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-[#A7C7E7] via-[#9ED9C8] to-[#FFF1B8]"
    >
      <div className="w-full max-w-7xl mx-auto px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Colonne gauche : texte */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-base leading-relaxed text-gray-800 max-w-md">
              Bonjour, je suis
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
              Kiara Wurtz
            </h1>
          </div>

          <p className="text-base leading-relaxed text-gray-800 max-w-md">
            Étudiante en 3e année à Epitech Digital, je me spécialise en gestion de
            projet et en conception de solutions digitales.
          </p>

          <p className="text-base text-gray-800">
            Je suis à la recherche d’une alternance pour{" "}
            <strong>Janvier 2026</strong>
          </p>

          {/* Boutons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-6 py-2 rounded-full bg-white text-gray-900 text-sm font-medium shadow hover:bg-gray-100 transition">
              Voir mes projets
            </button>

            <button className="px-6 py-2 rounded-full bg-white text-gray-900 text-sm font-medium shadow hover:bg-gray-100 transition">
              Télécharger mon CV
            </button>
          </div>
        </div>

        {/* Colonne droite : photo */}
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

      </div>
    </section>
  );
}
