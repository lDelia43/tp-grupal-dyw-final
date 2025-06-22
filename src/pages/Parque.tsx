import parque1 from "../assets/images/parque1.jpg"
import parque2 from "../assets/images/parque2.jpg"
import parque3 from "../assets/images/parque3.jpg"

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
    <main className="w-full">
      {/* SECCIONES */}
      {sections.map((section, idx) => (
        <section key={idx} className={`py-16 bg-${idx % 2 === 0 ? "[--color-neutral-light]" : "white"}`}>
          <div
            className={`max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 ${
              section.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={section.image}
              alt={section.title}
              className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
            />
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-[--color-primary-dark] mb-4">
                {section.title}
              </h2>
              <p className="text-[--color-neutral-dark] text-lg">{section.text}</p>
            </div>
          </div>
        </section>
      ))}
    </main>
  )
}

export default Parque
