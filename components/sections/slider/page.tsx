"use client";

import { motion } from "framer-motion";

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
        {/* TITRE */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1]
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="
            text-green-950 
            font-serif 
            text-4xl sm:text-5xl md:text-7xl lg:text-9xl 
            font-semibold
            drop-shadow-xl
          "
        >
          Lucas Heymans
        </motion.p>

        {/* SOUS-TEXTE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.4,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1]
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="
            text-green-950 
            font-serif 
            mt-4 
            text-xl sm:text-2xl md:text-4xl 
            drop-shadow-xl
          "
        >
          dessinateur au fusain
        </motion.div>

        {/* BOUTON */}
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.4,
            delay: 0.6,
            ease: [0.16, 1, 0.3, 1]
          }}
          viewport={{ once: true, amount: 0.3 }}
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
        </motion.a>
      </div>
    </section>
  );
}