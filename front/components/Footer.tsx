export default function Footer() {
  return (
    <footer
      className="
        bg-gradient-to-br
        from-[#9ED9C8] to-[#FFF1B8]
        dark:from-[#020617] dark:to-[#1E293B]
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-6 text-center">
        <p className="text-sm text-gray-800 dark:text-gray-300">
          © {new Date().getFullYear()} Kiara Wurtz. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
