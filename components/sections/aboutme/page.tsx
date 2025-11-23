export default function AboutMe() {
  return (
    <section className="bg-[#F5F5DC]">
      <div className="grid grid-cols-2 gap-20 p-24 ">
        <div className="">
           <img src="/images/aboutme.jpg" alt="" />
        </div>
        <div className="mt-30">
          <h1 className="text-5xl text-green-950 font-serif">À propos de Lucas Heymans</h1>
          <p className="pt-10 text-green-950">Lucas Heymans est un artiste belge de 27 ans, passionné par le dessin réaliste et l’exploration des émotions humaines à travers le portrait. Spécialisé dans les techniques traditionnelles comme le fusain et le charbon, il crée des œuvres puissantes où la lumière, les ombres et les textures jouent un rôle central. Ses dessins, souvent réalisés en grand format, mêlent précision, sensibilité et profondeur visuelle.

Autodidacte et curieux, Lucas partage régulièrement son processus créatif sur les réseaux sociaux, proposant des aperçus “behind the scenes” qui révèlent son souci du détail et son engagement artistique. À travers chaque œuvre, il cherche avant tout à capturer une histoire, une émotion, un regard — quelque chose d’humain et d’authentique.

Aujourd’hui, Lucas continue de développer son univers graphique et de faire évoluer sa technique au fil de projets personnels, de portraits et de créations originales.</p>
<p className="pt-16">Lucas Heymans est un artiste belge de 27 ans, passionné par le dessin réaliste et l’exploration des émotions humaines à travers le portrait. Spécialisé dans les techniques traditionnelles comme le fusain et le charbon, il crée des œuvres puissantes où la lumière, les ombres et les textures jouent un rôle central. Ses dessins, souvent réalisés en grand format, mêlent précision, sensibilité et profondeur visuelle.

Autodidacte et curieux, Lucas partage régulièrement son processus créatif sur les réseaux sociaux, proposant des aperçus “behind the scenes” qui révèlent son souci du détail et son engagement artistique. À travers chaque œuvre, il cherche avant tout à capturer une histoire, une émotion, un regard — quelque chose d’humain et d’authentique.

Aujourd’hui, Lucas continue de développer son univers graphique et de faire évoluer sa technique au fil de projets personnels, de portraits et de créations originales.</p>
 <a
  className="mt-10 bg-green-950 text-white px-6 py-3 rounded-xl font-serif text-xl hover:bg-gray-200 hover:text-green-950 transition inline-block"
  href=""
>
 Ou me voir ? 
</a>
        </div>
      </div>
    </section>
  );
}