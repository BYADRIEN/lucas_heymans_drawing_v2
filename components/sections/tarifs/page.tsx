export default function dessins() {
  return (
    <section className="bg-[#F5F5DC]">
      <div className="grid grid-cols-2 gap-56 p-24 text-green-950 h-screen">
        <div className="mt-20">
          <h1 className="text-5xl text-green-950 font-serif">Tarifs</h1>
          <h2 className="pt-10">Dessins petits (A5 – environ 15x21 cm)</h2>
          <p>Sujet simple (portrait rapide, nature morte simple) : 30–50 €</p>
          <p>Sujet complexe (portrait détaillé, animaux avec texture) : 50–80 €</p>
          <h2 className="pt-10">Dessins moyens (A4 – environ 21x29,7 cm)</h2>
          <p>Sujet simple : 60–100 €</p>
          <p>Sujet détaillé : 100–150 €</p>
          <h2 className="pt-10">Dessins grands (A3 – environ 29,7x42 cm)</h2>
          <p>Sujet simple : 120–180 €</p>
          <p>Sujet détaillé : 180–300 €</p>
          <h2 className="pt-10">Très grands (A2 et + – 42x59,4 cm ou plus)</h2>
          <p>Sujet simple : 250–400 €</p>
          <p>Sujet détaillé : 400–700 €</p>
          <a
  className="mt-10 bg-green-950 text-white px-6 py-3 rounded-xl font-serif text-xl hover:bg-gray-200 hover:text-green-950 transition inline-block"
  href=""
>
 Me contacter 
</a>
        </div>
        <div className="">
          <img src="/images/Capture.JPG" className="w-150" alt="" />
        </div>
      </div>
    </section>
  );
}