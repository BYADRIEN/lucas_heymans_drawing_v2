"use client";

import { motion } from "framer-motion";

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
          <motion.img
            src="/images/aboutme.jpg"
            alt=""
            className="
              w-full 
              max-w-sm md:max-w-none 
              rounded-lg 
              shadow-lg
            "
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.4,
              ease: [0.16, 1, 0.3, 1]
            }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>

        {/* Text content */}
        <div className="mt-6 md:mt-30">

          {/* Animation container (pour stagger) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 }
              }
            }}
          >

            {/* H1 animé */}
            <motion.h1
              className="
                text-3xl md:text-5xl 
                text-green-950 
                font-serif
                leading-tight
                font-semibold
              "
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.4,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }
              }}
            >
              À propos de Lucas Heymans
            </motion.h1>

            {/* Paragraphe animé */}
            <motion.p
              className="
                pt-6 md:pt-10 
                text-green-950 
                text-base md:text-lg 
                leading-relaxed
              "
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.4,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }
              }}
            >
              Lucas Heymans est un artiste belge de 27 ans, passionné par le dessin
              réaliste et l’exploration des émotions humaines à travers le portrait.
              Spécialisé dans les techniques traditionnelles comme le fusain et le
              charbon, il crée des œuvres puissantes où la lumière, les ombres et les
              textures jouent un rôle central. ...
            </motion.p>

            {/* Bouton animé */}
            <motion.a
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
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.4,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }
              }}
            >
              Ou me voir ?
            </motion.a>

          </motion.div>
        </div>
      </div>
    </section>
  );
}