import Link from "next/link";

export default function OrbitPage() {
  return (
    <main className="pt-16 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 space-y-10">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
        >
          ← Retour à l’accueil
        </Link>

        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold text-gray-900">
            Orbit
          </h1>
          <span className="px-3 py-1 text-xs font-medium bg-orange-100 text-orange-700 rounded-full">
            En cours
          </span>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Conception d’une solution de paiement autonome pour les boutiques
          de prêt-à-porter. Les articles sont scannés via des étiquettes NFC
          dans une application dédiée afin de fluidifier le parcours client.
        </p>

        <div>
          <h2 className="text-lg font-semibold mb-2">
            Outils et compétences
          </h2>

          <div className="flex flex-wrap gap-2">
            {[
              "Études de marché",
              "Méthodes agiles",
              "Organisation",
              "Notion",
              "Figma",
            ].map((tool) => (
              <span key={tool} className="px-3 py-1 text-sm border rounded-full">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <iframe
          src="/pdf/orbit.pdf"
          className="w-full h-[600px] border rounded-xl"
        />

      </div>
    </main>
  );
}
