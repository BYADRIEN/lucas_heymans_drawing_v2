import { ImGithub } from "react-icons/im";

export default function dessins() {
  return (
    <section className="relative h-[60vh] md:h-[60h]">

      {/* Image background */}
      <img
        className="
          absolute inset-0 w-full h-full 
          object-cover opacity-30
        "
        src="/images/4556789.jpg"
        alt="Background"
      />

      {/* Overlay + contenu */}
      <div
        className="
          relative z-10 
          flex flex-col items-center justify-center
          h-full 
          text-center
          px-6 py-20
          bg-black/30
        "
      >
        <p
          className="
            text-green-950 
            font-serif 
            text-3xl md:text-5xl 
            font-semibold 
            mb-6
          "
        >
          Découvrez mes réalisations
        </p>

        <a
          className="
            bg-green-950 text-white 
            px-6 py-3 
            rounded-xl 
            font-serif 
            text-lg md:text-xl 
            hover:bg-gray-200 hover:text-green-950 
            transition
          "
          href=""
        >
          Mes dessins
        </a>
      </div>

    </section>
  );
}