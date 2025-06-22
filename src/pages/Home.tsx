import { Link } from "react-router-dom"
import Trepadores from "../assets/images/trepadores.jpg"
import Toboganes from "../assets/images/toboganes.jpg"
import Agua from "../assets/images/water-play.jpg"

const Home = () => {
  return (
    <main className="w-full">
      {/* HERO */}
      <section className="relative h-[80vh] bg-[url('/images/banner.png')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">¡Diversión sin límites!</h1>
          <p className="text-xl md:text-2xl mb-8 font-medium drop-shadow">
            Vení con tu familia o tu escuela a vivir una experiencia inolvidable
          </p>
          <Link
            to="/boletos"
            className="bg-accent text-black px-8 py-4 rounded-full font-bold hover:bg-accent-dark transition shadow-lg text-lg"
          >
            Reservá tu visita
          </Link>
        </div>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="py-8 bg-primary-light flex justify-center">
        <div className="max-w-2xl w-full mx-4 bg-white rounded-2xl shadow-lg p-10 text-center border border-primary/20">
          <h2 className="text-3xl font-bold mb-4 text-primary">¿Qué es Aqualandia?</h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            Aqualandia es el parque acuático ideal para familias, escuelas y grupos que buscan diversión,
            aventura y seguridad. Nuestro objetivo es brindar experiencias inolvidables a través de
            atracciones para todas las edades, espacios verdes y servicios de calidad.
          </p>
        </div>
      </section>

      {/* ATRACCIONES */}
      <section className="py-8 bg-primary-light flex justify-center">
        <div className="max-w-6xl w-full mx-4 bg-white rounded-2xl shadow-lg p-10 border border-primary/20">
          <h2 className="text-3xl font-bold text-center text-primary-dark mb-8">
            Atracciones para todas las edades
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Trepadores",
                img: Trepadores,
              },
              {
                title: "Juegos de agua",
                img: Agua,
              },
              {
                title: "Toboganes",
                img: Toboganes,
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-primary-light rounded-xl shadow-md overflow-hidden text-center p-6 hover:scale-105 transition border border-primary/10"
              >
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFO VISITA */}
      <section className="py-8 bg-primary-light flex justify-center">
        <div className="max-w-5xl w-full mx-4 bg-white rounded-2xl shadow-lg p-10 text-center border border-primary/20">
          <h2 className="text-3xl font-bold mb-6 text-primary-dark">Planificá tu visita</h2>
          <div className="grid md:grid-cols-3 gap-8 text-neutral-dark">
            <div>
              <h3 className="text-xl font-semibold mb-2">Horarios</h3>
              <p>Lunes a Domingos de 10:00 a 18:00 hs</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Ubicación</h3>
              <p>Lima 717, CABA, Argentina</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Reservas</h3>
              <p>Grupos escolares, cumpleaños, eventos</p>
            </div>
          </div>
          <Link
            to="/contacto"
            className="mt-8 bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition inline-block shadow"
          >
            Contactanos
          </Link>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-8 bg-primary-light flex justify-center">
        <div className="max-w-2xl w-full mx-4 bg-white rounded-2xl shadow-lg p-10 text-center border border-primary/20">
          <h2 className="text-3xl font-bold mb-4 text-primary-dark">¿Listos para la aventura?</h2>
          <p className="text-lg mb-6 text-neutral-700">
            Sumate a la experiencia Aqualandia y creá recuerdos inolvidables
          </p>
          <Link
            to="/boletos"
            className="bg-aqua text-black px-8 py-3 rounded-full font-bold hover:bg-aqua-dark transition inline-block shadow"
          >
            Comprar entradas
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home
