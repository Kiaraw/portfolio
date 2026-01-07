export default function Skills() {
  return (
    <section id="skills" className="pt-16 pb-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-14">

        <h2 className="text-4xl font-bold text-gray-900">
          Compétences
        </h2>

        {/* Bloc compétence */}
        <div className="space-y-4">
          <h3 className="text-regular font-medium text-gray-600">
            Gestion de projet
          </h3>

          <div className="flex justify-center">
            <div className="grid grid-cols-5 gap-14">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-20 h-20 bg-gray-200 rounded"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bloc compétence */}
        <div className="space-y-4">
          <h3 className="text-regular font-medium text-gray-600">
            Développement web
          </h3>

          <div className="flex justify-center">
            <div className="grid grid-cols-5 gap-14">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-20 h-20 bg-gray-200 rounded"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bloc compétence */}
        <div className="space-y-4">
          <h3 className="text-regular font-medium text-gray-600">
            Data et analyse
          </h3>

          <div className="flex justify-center">
            <div className="grid grid-cols-5 gap-14">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-20 h-20 bg-gray-200 rounded"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bloc compétence */}
        <div className="space-y-4">
          <h3 className="text-regular font-medium text-gray-600">
            Conception et UX/UI
          </h3>

          <div className="flex justify-center">
            <div className="grid grid-cols-5 gap-14">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-20 h-20 bg-gray-200 rounded"
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
