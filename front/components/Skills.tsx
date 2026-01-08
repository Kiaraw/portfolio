import Image from "next/image";
import FadeIn from "./ui/FadeIn";

export default function Skills() {
  return (
    <FadeIn>
      <section id="skills" className="pt-10 pb-24">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-14">

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Compétences
          </h2>

          {/* ===== Gestion de projet ===== */}
          <div className="space-y-5">
            <h3 className="font-semibold text-gray-600 dark:text-gray-400">
              Gestion de projet
            </h3>

            <div className="flex justify-center">
              <div className="grid grid-cols-5 gap-8">
                {[
                  { src: "/logo/notion.png", label: "Notion" },
                  { src: "/logo/suite_office.png", label: "Suite Office" },
                  { src: "/logo/canva.png", label: "Canva" },
                  { src: "/logo/google.png", label: "Suite Google" },
                  { src: "/logo/github.png", label: "GitHub" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-2">
                    <div
                      className="
                        w-20 h-20
                        bg-[#FFF1B866] dark:bg-white/10
                        rounded-xl flex items-center justify-center
                        transition-all duration-200
                        hover:scale-105 hover:shadow-md
                      "
                    >
                      <Image src={item.src} alt={item.label} width={40} height={40} />
                    </div>
                    <span className="text-xs text-gray-700 dark:text-gray-300">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ===== Développement & Langage ===== */}
          <div className="space-y-5">
            <h3 className="font-semibold text-gray-600 dark:text-gray-400">
              Développement & Langage
            </h3>

            <div className="flex justify-center">
              <div className="grid grid-cols-5 gap-8">
                {[
                  { src: "/logo/html.png", label: "HTML" },
                  { src: "/logo/js.png", label: "JavaScript" },
                  { src: "/logo/next.png", label: "Next.js" },
                  { src: "/logo/react.png", label: "React Native" },
                  { src: "/logo/python.png", label: "Python" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-2">
                    <div
                      className="
                        w-20 h-20
                        bg-[#FFF1B866] dark:bg-white/10
                        rounded-xl flex items-center justify-center
                        transition-all duration-200
                        hover:scale-105 hover:shadow-md
                      "
                    >
                      <Image src={item.src} alt={item.label} width={40} height={40} />
                    </div>
                    <span className="text-xs text-gray-700 dark:text-gray-300">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ===== Outils ===== */}
          <div className="space-y-5">
            <h3 className="font-semibold text-gray-600 dark:text-gray-400">
              Outils et logiciels
            </h3>

            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-8">
                {[
                  { src: "/logo/figma.png", label: "Figma" },
                  { src: "/logo/adobe.png", label: "Suite Adobe" },
                  { src: "/logo/tableau.png", label: "Tableau / Power BI" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-2">
                    <div
                      className="
                        w-20 h-20
                        bg-[#FFF1B866] dark:bg-white/10
                        rounded-xl flex items-center justify-center
                        transition-all duration-200
                        hover:scale-105 hover:shadow-md
                      "
                    >
                      <Image src={item.src} alt={item.label} width={40} height={40} />
                    </div>
                    <span className="text-xs text-gray-700 dark:text-gray-300 text-center">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </FadeIn>
  );
}
