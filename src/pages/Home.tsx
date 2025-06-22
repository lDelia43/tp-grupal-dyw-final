const Home = () => {
  return (
    <main className="w-full">

      {/* HERO */}
      <section className="relative h-[80vh] bg-[url('/images/banner.png')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">¡Diversión sin límites!</h1>
          <p className="text-xl md:text-2xl mb-6">Vení con tu familia o tu escuela a vivir una experiencia inolvidable</p>
          <button className="bg-[--color-accent] text-black px-6 py-3 rounded-full font-semibold hover:bg-[--color-accent-dark] transition">
            Reservá tu visita
          </button>
        </div>
      </section>

      {/* ATRACCIONES */}
      <section className="py-20 bg-[--color-neutral-light]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[--color-primary-dark] mb-12">Atracciones para todas las edades</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Trepadores", img: "/src/assets/images/trepar.jpg" },
              { title: "Juegos de agua", img: "//src/assets/images/juegos agua.jpg" },
              { title: "Toboganes", img: "/src/assets/images/tobagua.jpg" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden text-center p-4 hover:scale-105 transition">
                <img src={item.img} alt={item.title} className="w-full h-48 object-contain mb-4" />
                <h3 className="text-xl font-semibold text-[--color-primary]">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFO VISITA */}
      <section className="py-20 bg-[--color-accent-light] text-center text-[--color-neutral-dark]">
        <h2 className="text-3xl font-bold mb-6">Planificá tu visita</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Horarios</h3>
            <p>Lunes a Domingos de 10:00 a 18:00 hs</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Ubicación</h3>
            <p>Ruta X km X, Ciudad, Provincia</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Reservas</h3>
            <p>Grupos escolares, cumpleaños, eventos</p>
          </div>
        </div>
        <button className="mt-8 bg-[--color-primary] text-white px-6 py-3 rounded-full hover:bg-[--color-primary-dark] transition">
          Contactanos
        </button>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-[--color-nature] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listos para la aventura?</h2>
        <p className="text-lg mb-6">Sumate a la experiencia Aqualandia y creá recuerdos inolvidables</p>
        <button className="bg-[--color-aqua] text-black px-6 py-3 rounded-full font-semibold hover:bg-[--color-aqua-dark] transition">
          Comprar entradas
        </button>
      </section>
    </main>
  );
};

export default Home;
