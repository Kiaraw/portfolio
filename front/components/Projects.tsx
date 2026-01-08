import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="pt-12 pb-24 bg-gradient-to-br from-[#A7C7E7] via-[#9ED9C8] to-[#FFF1B8]">
      <div className="max-w-6xl mx-auto px-6 space-y-12">

        <h2 className="text-4xl font-bold text-gray-900 text-center">
          Projets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* ===== Projet 1 ===== */}
          <div className="border border-gray-300 rounded-2xl p-6 space-y-4 bg-white">
            <h3 className="text-xl font-semibold text-gray-900">
              Orbit
            </h3>

            <p className="text-sm text-gray-700 leading-relaxed">
              Conception d’une solution de paiement autonome pour les boutiques
              de prêt-à-porter. Les articles sont scannés via étiquettes NFC
              dans une application dédiée.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs border rounded-full">Études de marché</span>
              <span className="px-3 py-1 text-xs border rounded-full">Méthodes agiles</span>
              <span className="px-3 py-1 text-xs border rounded-full">Organisation</span>
              <span className="px-3 py-1 text-xs border rounded-full">Notion</span>
              <span className="px-3 py-1 text-xs border rounded-full">Figma</span>
            </div>

            <Link
                href="/projects/orbit"
                className="inline-block text-sm underline underline-offset-4"
            >
                Voir le projet →
            </Link>
            </div>

          {/* ===== Projet 2 ===== */}
          <div className="border border-gray-300 rounded-2xl p-6 space-y-4 bg-white">
            <h3 className="text-xl font-semibold text-gray-900">
              Bloom
            </h3>

            <p className="text-sm text-gray-700 leading-relaxed">
              Projet de cadrage fonctionnel visant à structurer une solution
              numérique. Rédaction d’un cahier des charges, formalisation des
              besoins et priorisation.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs border rounded-full">Notion</span>
              <span className="px-3 py-1 text-xs border rounded-full">Cahier des charges</span>
              <span className="px-3 py-1 text-xs border rounded-full">Rédaction technique</span>
            </div>

            <Link
                href="/projects/gwidme"
                className="inline-block text-sm underline underline-offset-4"
            >
                Voir le projet →
            </Link>
          </div>

          {/* ===== Projet 3 ===== */}
          <div className="border border-gray-300 rounded-2xl p-6 space-y-4 bg-white">
            <h3 className="text-xl font-semibold text-gray-900">
              BlockLucky
            </h3>

            <p className="text-sm text-gray-700 leading-relaxed">
              Plateforme décentralisée de loterie basée sur un smart contract
              Ethereum (réseau local Hardhat). Achat de tickets via MetaMask.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs border rounded-full">Next.js</span>
              <span className="px-3 py-1 text-xs border rounded-full">Solidity</span>
              <span className="px-3 py-1 text-xs border rounded-full">Blockchain</span>
              <span className="px-3 py-1 text-xs border rounded-full">Travail d’équipe</span>
            </div>

            <Link
                href="/projects/blocklucky"
                className="inline-block text-sm underline underline-offset-4"
            >
                Voir le projet →
            </Link>
          </div>

          {/* ===== Projet 4 ===== */}
          <div className="border border-gray-300 rounded-2xl p-6 space-y-4 bg-white">
            <h3 className="text-xl font-semibold text-gray-900">
              Moody React
            </h3>

            <p className="text-sm text-gray-700 leading-relaxed">
              Développement en équipe d’une application mobile React Native
              permettant aux salariés d’exprimer leurs ressentis de manière
              anonyme.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs border rounded-full">React Native</span>
              <span className="px-3 py-1 text-xs border rounded-full">Gestion de projet</span>
              <span className="px-3 py-1 text-xs border rounded-full">Gestion d’équipe</span>
              <span className="px-3 py-1 text-xs border rounded-full">Travail en groupe</span>
            </div>

            <Link
                href="/projects/moody"
                className="inline-block text-sm underline underline-offset-4"
            >
                Voir le projet →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
