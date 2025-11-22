export default function Slider() {
  return (
    <section className="relative h-screen w-full ">

      {/* Vidéo en background */}
      <video
        className="absolute w-full h-full object-cover opacity-25"
        src="/images/3video.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay + contenu */}
      <div className="relative z-10 flex gap-4 justify-center h-full items-center flex-col bg-black/30">
        <p className="text-[#F5F5DC] text-9xl p-4 font-serif">Lucas Heymans</p>
        <div className="text-[#F5F5DC] text-4xl p-10 font-serif">dessinateur au fusain</div>
        <a className="bg-green-950 text-white p-10 rounded-xl font-serif hover:bg-gray-200" href="">Mes dessins</a>
      </div>

    </section>
  );
}