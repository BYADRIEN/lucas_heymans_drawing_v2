export default function AboutMe() {
  return (
    <section className="bg-[#F5F5DC] md:h-screen">
      <div
        className="
          grid 
          grid-cols-1 md:grid-cols-2 
          gap-10 md:gap-20 
          p-6 md:p-24
        "
      >
        {/* Image */}
        <div className="flex justify-center md:block">
          <img
            src="/images/aboutme.jpg"
            alt=""
            className="
              w-full 
              max-w-sm md:max-w-none 
              rounded-lg 
              shadow-lg
            "
          />
        </div>

        {/* Text content */}
        <div className="mt-6 md:mt-30">
          <h1
            className="
              text-3xl md:text-5xl 
              text-green-950 
              font-serif
              leading-tight
              font-semibold
            "
          >
            À propos de Lucas Heymans
          </h1>

          <p
            className="
              pt-6 md:pt-10 
              text-green-950 
              text-base md:text-lg 
              leading-relaxed
            "
          >
            Lucas Heymans est un artiste belge de 27 ans, passionné par le dessin
            réaliste et l’exploration des émotions humaines à travers le portrait.
            Spécialisé dans les techniques traditionnelles comme le fusain et le
            charbon, il crée des œuvres puissantes où la lumière, les ombres et les
            textures jouent un rôle central. Ses dessins, souvent réalisés en grand
            format, mêlent précision, sensibilité et profondeur visuelle.
            <br /><br />
            Autodidacte et curieux, Lucas partage régulièrement son processus
            créatif sur les réseaux sociaux, proposant des aperçus “behind the
            scenes” qui révèlent son souci du détail et son engagement artistique.
            À travers chaque œuvre, il cherche avant tout à capturer une histoire,
            une émotion, un regard — quelque chose d’humain et d’authentique.
            <br /><br />
            Aujourd’hui, Lucas continue de développer son univers graphique et de
            faire évoluer sa technique au fil de projets personnels, de portraits
            et de créations originales.
          </p>

          <a
            className="
              mt-8 md:mt-10 
              bg-green-950 text-white 
              px-6 py-3 
              rounded-xl font-serif 
              text-lg md:text-xl 
              hover:bg-gray-200 hover:text-green-950 
              transition 
              inline-block
            "
            href=""
          >
            Ou me voir ?
          </a>
        </div>
      </div>
    </section>
  );
}