export default function Footer() {
  return (
    <footer className="bg-green-950 text-[#F5F5DC] font-serif">
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Bloc 1 - Présentation */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4">Lucas Heymans</h2>
          <p className="opacity-80 leading-relaxed">
            Artiste belge spécialisé dans le dessin au fusain.
            Créations réalistes, émotions profondes et univers visuel unique.
          </p>
        </div>

        {/* Bloc 2 - Navigation */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Navigation</h3>
          <ul className="flex flex-col gap-2">
            <li><a className="hover:underline" href="">Mes dessins</a></li>
            <li><a className="hover:underline" href="">Tarifs</a></li>
            <li><a className="hover:underline" href="">À propos</a></li>
            <li><a className="hover:underline" href="">Contact</a></li>
          </ul>
        </div>

        {/* Bloc 3 - Réseaux sociaux */}
        <div className="text-center md:text-right">
          <h3 className="text-2xl font-semibold mb-4">Suivez-moi</h3>
          <div className="flex justify-center md:justify-end gap-4">
            <a href="#" className="hover:opacity-70 transition">Instagram</a>
            <a href="#" className="hover:opacity-70 transition">TikTok</a>
            <a href="#" className="hover:opacity-70 transition">YouTube</a>
          </div>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="border-t border-[#F5F5DC]/40 py-6 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Lucas Heymans — Tous droits réservés - Made by Adrien Web
      </div>
    </footer>
  );
}