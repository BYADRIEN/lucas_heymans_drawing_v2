"use client";

import { motion } from "framer-motion";

export default function Dessins() {
  return (
    <section className="bg-[#F5F5DC]">
      <div
        className="
          grid 
          grid-cols-1 md:grid-cols-2 
          gap-10 md:gap-56 
          p-6 md:p-24 
          text-green-950
        "
      >
        {/* Texte animé */}
        <motion.div
          className="mt-10 md:mt-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-3xl md:text-5xl text-green-950 font-serif font-semibold">
            Tarifs
          </h1>

          <h2 className="pt-6 md:pt-10 text-lg md:text-xl">
            Dessins petits (A5 – environ 15x21 cm)
          </h2>
          <p>Sujet simple : 30–50 €</p>
          <p>Sujet complexe : 50–80 €</p>

          <h2 className="pt-6 md:pt-10 text-lg md:text-xl">
            Dessins moyens (A4 – environ 21x29,7 cm)
          </h2>
          <p>Sujet simple : 60–100 €</p>
          <p>Sujet détaillé : 100–150 €</p>

          <h2 className="pt-6 md:pt-10 text-lg md:text-xl">
            Dessins grands (A3 – environ 29,7x42 cm)
          </h2>
          <p>Sujet simple : 120–180 €</p>
          <p>Sujet détaillé : 180–300 €</p>

          <h2 className="pt-6 md:pt-10 text-lg md:text-xl">
            Très grands (A2 et + – 42x59,4 cm ou plus)
          </h2>
          <p>Sujet simple : 250–400 €</p>
          <p>Sujet détaillé : 400–700 €</p>

          <a
            className="
              mt-8 md:mt-10 
              bg-green-950 text-white 
              px-6 py-3 
              rounded-xl font-serif text-lg md:text-xl 
              hover:bg-gray-200 hover:text-green-950 
              transition 
              inline-block
            "
            href=""
          >
            Me contacter
          </a>
        </motion.div>

        {/* Image */}
        <div className="flex justify-center md:block">
          <img
            src="/images/Capture.JPG"
            className="w-full max-w-sm md:max-w-none rounded-lg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}