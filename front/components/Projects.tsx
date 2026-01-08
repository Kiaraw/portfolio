import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function Projects() {
  return (
    <FadeIn>
      <section
        id="projects"
        className="
          pt-12 pb-24
          bg-gradient-to-br
          from-[#A7C7E7] via-[#9ED9C8] to-[#FFF1B8]
          dark:from-[#020617] dark:via-[#0F172A] dark:to-[#1E293B]
        "
      >
        <div className="max-w-6xl mx-auto px-6 space-y-12">

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center">
            Projets
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Orbit",
                desc: "Conception d’une solution de paiement autonome pour les boutiques de prêt-à-porter.",
                tags: ["Études de marché", "Méthodes agiles", "Organisation", "Notion", "Figma"],
                link: "/projects/orbit",
              },
              {
                title: "GwidMe",
                desc: "Application mobile permettant de visualiser l’affluence et les horaires d’activité des musées et monuments.",
                tags: ["UX/UI", "Carte interactive", "Data", "Gestion de projet"],
                link: "/projects/gwidme",
              },
              {
                title: "BlockLucky",
                desc: "Plateforme décentralisée de loterie basée sur un smart contract Ethereum.",
                tags: ["Next.js", "Solidity", "Blockchain", "Travail d’équipe"],
                link: "/projects/blocklucky",
              },
              {
                title: "Moody React",
                desc: "Application mobile React Native permettant aux salariés d’exprimer leurs ressentis de manière anonyme.",
                tags: ["React Native", "Gestion de projet", "Gestion d’équipe", "Travail en groupe"],
                link: "/projects/moody",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="
                  border border-gray-300 dark:border-white/10
                  rounded-2xl p-6 space-y-4
                  bg-white dark:bg-white/5
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg
                "
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        px-3 py-1 text-xs rounded-full
                        border border-gray-300 dark:border-white/20
                        text-gray-700 dark:text-gray-300
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.link}
                  className="inline-block text-sm underline underline-offset-4 text-gray-900 dark:text-gray-100 hover:opacity-70 transition"
                >
                  Voir le projet →
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>
    </FadeIn>
  );
}
