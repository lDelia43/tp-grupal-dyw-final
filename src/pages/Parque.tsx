import { Link } from "react-router-dom"
import parque1 from "../assets/images/parque1.jpg"
import parque2 from "../assets/images/parque2.jpg"
import parque3 from "../assets/images/parque3.jpg"
import parquebanner from "../assets/images/parquebanner.png"

const sections = [
  {
    title: "Un espacio de diversión y naturaleza",
    text: "Aqualandia es un parque pensado para brindar a niños y familias un entorno seguro, al aire libre, rodeado de naturaleza. Contamos con una amplia variedad de juegos, espacios recreativos y zonas de descanso.",
    image: parque1,
    reverse: false,
  },
  {
    title: "Seguridad y accesibilidad",
    text: "El predio está totalmente cercado y monitoreado. Todas nuestras estructuras cumplen con normas de seguridad y están pensadas para todas las edades. Accesos cómodos para cochecitos y personas con movilidad reducida.",
    image: parque2,
    reverse: true,
  },
  {
    title: "Áreas verdes y sombra natural",
    text: "La arboleda del predio brinda sombra durante todo el día, ideal para el descanso y la recreación. Además, contamos con mesas, bancos y espacios techados para picnic o cumpleaños.",
    image: parque3,
    reverse: false,
  },
]

const Parque = () => {
  return (
    <main className="w-full bg-primary">
      {/* Banner */}
      <div className="relative w-full" style={{ aspectRatio: "3/1", minHeight: 220, maxHeight: "40vh" }}>
        <img
          src={parquebanner}
          alt="Banner Parque Acuático"
          width={1200}
          height={400}
          className="w-full h-full object-cover rounded-none"
          style={{ aspectRatio: "3/1", minHeight: 220, maxHeight: "40vh" }}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-white px-4 drop-shadow-lg">
            Nuestro Parque Acuático
          </h1>
        </div>
      </div>
      {sections.map((section, idx) => (
        <div key={idx}>
          <section className="py-10 md:py-16">
            <div
              className={`max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-10 ${
                section.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              <img
                src={section.image}
                alt={section.title}
                width={600}
                height={300}
                className="w-full md:w-1/2 rounded-lg shadow object-cover max-h-64 md:max-h-96 aspect-video"
                loading="lazy"
                decoding="async"
                style={{ aspectRatio: "16/9" }}
              />
              <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">
                  {section.title}
                </h2>
                <p className="text-neutral-dark text-lg">{section.text}</p>
              </div>
            </div>
          </section>
          {/* Divisor minimalista entre secciones, menos después de la última */}
          {idx < sections.length - 1 && (
            <div className="w-full flex justify-center my-4">
              <div className="h-px w-2/3 bg-nature" />
            </div>
          )}
        </div>
      ))}
      {/* Cuadro de contacto destacado */}
      <div className="w-full flex justify-center bg-primary py-8">
        <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-8 border border-primary/20 text-center">
          <h2 className="text-2xl font-bold text-primary-dark mb-4">Contacto</h2>
          <p className="text-neutral-dark text-lg mb-2">
            ¿Querés saber más o tenés alguna consulta?
          </p>
          <p className="text-neutral-dark text-base mb-4">
            Escribinos a <a href="mailto:info@aqualandia.com" className="text-accent underline">info@aqualandia.com</a> o llamanos al <a href="tel:+541140000000" className="text-accent underline">11 4000-0000</a>
          </p>
          <Link
            to="/contacto"
            className="inline-block mt-2 bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-primary-dark transition"
          >
            Ir a la página de contacto
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Parque
