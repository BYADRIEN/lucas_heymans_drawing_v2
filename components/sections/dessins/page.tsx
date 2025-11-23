import { ImGithub } from "react-icons/im";

export default function dessins() {
  return (
      <section className="relative h-150 ">

      {/* Vidéo en background */}
      <img
        className="absolute w-full h-full object-cover opacity-25"
        src="/images/4556789.jpg"
      ></img>

      {/* Overlay + contenu */}
      <div className="relative z-10 flex gap-4 justify-center h-full items-center flex-col bg-black/30">
        <p className="text-green-950 text-5xl p-4 font-serif">Découvrez mes réalisations</p>
        <a className="bg-green-950 text-white px-6 py-3 rounded-xl font-serif text-xl hover:bg-gray-200 hover:text-green-950 transition" href="">
  Mes dessins
</a>
      </div>

    </section>
  );
}