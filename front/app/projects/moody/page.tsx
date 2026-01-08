import Link from "next/link";

export default function MoodyPage() {
  return (
    <main className="pt-16 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 space-y-10">

        <Link href="/" className="text-sm text-gray-700 hover:text-gray-900">
          ← Retour à l’accueil
        </Link>

        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold">
            Moody React
          </h1>
          <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
            Terminé
          </span>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Développement en équipe d’une application mobile React Native
          permettant aux salariés d’exprimer leurs ressentis de manière
          anonyme afin d’améliorer la communication interne.
        </p>

        <div>
          <h2 className="text-lg font-semibold mb-2">
            Outils et compétences
          </h2>

          <div className="flex flex-wrap gap-2">
            {[
              "React Native",
              "Gestion de projet",
              "Gestion d’équipe",
              "Travail en groupe",
            ].map((tool) => (
              <span key={tool} className="px-3 py-1 text-sm border rounded-full">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <iframe
          src="/pdf/moody.pdf"
          className="w-full h-[600px] border rounded-xl"
        />

      </div>
    </main>
  );
}
