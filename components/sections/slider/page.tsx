export default function Slider() {
  return (
    <section className="relative h-[70vh] md:h-screen w-full">

      {/* Vidéo background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        src="/images/3video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay + contenu */}
      <div
        className="
          relative z-10 
          flex flex-col justify-center items-center 
          h-full 
          bg-black/30 
          text-center
          px-4
        "
      >
        <p
          className="
            text-green-950 
            font-serif 
            text-4xl sm:text-5xl md:text-7xl lg:text-9xl 
            font-semibold
            drop-shadow-xl
          "
        >
          Lucas Heymans
        </p>

        <div
          className="
            text-green-950 
            font-serif 
            mt-4 
            text-xl sm:text-2xl md:text-4xl 
            drop-shadow-xl
          "
        >
          dessinateur au fusain
        </div>

        <a
          className="
            mt-6 md:mt-10
            bg-green-950 text-white 
            px-6 py-3 
            rounded-xl font-serif 
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