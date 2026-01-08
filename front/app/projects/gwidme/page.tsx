import Link from "next/link";

export default function GwidMePage() {
  return (
    <main className="pt-16 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 space-y-10">

        {/* Retour */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
        >
          ← Retour à l’accueil
        </Link>

        {/* Titre + statut */}
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold text-gray-900">
            GwidMe
          </h1>
          <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
            Terminé
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed">
          GwidMe est une application mobile dédiée aux touristes, permettant de
          visualiser en temps réel l’affluence et les horaires d’activité des
          musées et monuments. Pensée comme une alternative culturelle à Waze,
          l’application repose sur une carte interactive centralisant les
          informations clés afin d’optimiser les parcours de visite et limiter
          la surfréquentation.
        </p>

        {/* Outils */}
        <div>
          <h2 className="text-lg font-semibold mb-2">
            Outils et compétences
          </h2>

          <div className="flex flex-wrap gap-2">
            {[
              "Gestion de projet",
              "UX/UI",
              "Maquettage",
              "Prototypage",
              "Data.gouv",
              "Carte interactive",
              "Recherche utilisateur",
            ].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 text-sm border rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* PDF */}
        <div>
          <h2 className="text-lg font-semibold mb-4">
            Présentation du projet
          </h2>

          <iframe
            src="/pdf/gwidme.pdf"
            className="w-full h-[600px] border rounded-xl"
          />
        </div>

      </div>
    </main>
  );
}
