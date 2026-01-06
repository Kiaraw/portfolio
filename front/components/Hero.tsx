export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-[#E5E5E5]"
    >
      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Colonne gauche : texte */}
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-800 max-w-md">
            Bonjour, je suis{" "}
            <span className="font-semibold">Kiara Wurtz</span>.
            <br />
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
          <div className="w-full max-w-sm aspect-square bg-red-600">
            {/* Image à venir */}
          </div>
        </div>

      </div>
    </section>
  );
}
