import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="pt-20 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-5">

        <h2 className="text-4xl font-bold text-gray-900">
          Coordonnées
        </h2>

        <p className="text-gray-700 max-w-xl mx-auto">
            Je suis actuellement à la recherche d’une alternance. <br></br>
            N’hésitez pas à me contacter, je serais ravie d’échanger avec vous !
        </p>

        {/* Coordonnées */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-6">

          {/* Email */}
          <a
            href="mailto:kiara.wurtz@epitech.digital"
            className="flex items-center gap-3 text-gray-900 hover:opacity-70 transition"
          >
            <Image
              src="/logo/mail.png"
              alt="Email"
              width={20}
              height={20}
            />
            <span className="underline underline-offset-4">
              kiara.wurtz@epitech.digital
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ton-profil-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-900 hover:opacity-70 transition"
          >
            <Image
              src="/logo/linkedin.png"
              alt="LinkedIn"
              width={20}
              height={20}
            />
            <span className="underline underline-offset-4">
              LinkedIn
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}
