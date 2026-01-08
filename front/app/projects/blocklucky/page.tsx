import Link from "next/link";

export default function BlockLuckyPage() {
  return (
    <main className="pt-16 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 space-y-10">

        <Link href="/" className="text-sm text-gray-700 hover:text-gray-900">
          ← Retour à l’accueil
        </Link>

        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold">
            BlockLucky
          </h1>
          <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
            Terminé
          </span>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Plateforme décentralisée de loterie basée sur un smart contract
          Ethereum (Hardhat). Achat de tickets via MetaMask et tirages
          automatisés.
        </p>

        <div>
          <h2 className="text-lg font-semibold mb-2">
            Outils et compétences
          </h2>

          <div className="flex flex-wrap gap-2">
            {[
              "Next.js",
              "Solidity",
              "Blockchain",
              "Travail d’équipe",
            ].map((tool) => (
              <span key={tool} className="px-3 py-1 text-sm border rounded-full">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <iframe
          src="/pdf/blocklucky.pdf"
          className="w-full h-[600px] border rounded-xl"
        />

      </div>
    </main>
  );
}
