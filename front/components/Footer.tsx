export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#9ED9C8] to-[#FFF1B8]">
      <div className="max-w-6xl mx-auto px-6 py-6 text-center">
        <p className="text-sm text-gray-800">
          © {new Date().getFullYear()} Kiara Wurtz. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
