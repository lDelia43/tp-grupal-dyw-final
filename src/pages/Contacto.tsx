import { useState } from "react";
import Mapa from "../lib/components/map/Map";

const Contacto = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [errores, setErrores] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrores({ ...errores, [name]: "" });
  };

  const validar = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.nombre.trim()) newErrors.nombre = "El nombre es obligatorio.";
    if (!form.email.trim()) newErrors.email = "El email es obligatorio.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email inválido.";
    if (!form.mensaje.trim()) newErrors.mensaje = "El mensaje es obligatorio.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const erroresValidacion = validar();
    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      return;
    }

    alert("Gracias por contactarte. Te responderemos a la brevedad.");

    // Limpia el formulario
    setForm({ nombre: "", email: "", asunto: "", mensaje: "" });
    setErrores({});
  };
  return (
    <main className="w-full">

      {/* FORMULARIO + DATOS */}
      <section className="py-20 bg-primary">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">

          {/* FORMULARIO */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-primary-light mb-4">Escribinos</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-neutral-dark">Nombre</label>
                <input
                  name="nombre"
                  type="text"
                  value={form.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errores.nombre && <p className="text-red-500 text-sm">{errores.nombre}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-dark">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errores.email && <p className="text-red-500 text-sm">{errores.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-dark">Asunto</label>
                <input
                  name="asunto"
                  type="text"
                  value={form.asunto}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-dark">Mensaje</label>
                <textarea
                  name="mensaje"
                  rows={5}
                  value={form.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
                {errores.mensaje && <p className="text-red-500 text-sm">{errores.mensaje}</p>}
              </div>

              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* INFORMACIÓN DE CONTACTO */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-primary-dark mb-6">Información de contacto</h2>
            <ul className="space-y-4 text-neutral-dark text-lg">
              <li>📍 Dirección: Lima 717, CABA</li>
              <li>📞 Teléfono: (011) 4000-0000</li>
              <li>📧 Email: contacto@Aqualandia.com.ar</li>
              <li>🕒 Horarios: Lunes a Domingo de 10 a 18 hs</li>
            </ul>
          </div>

        </div>
      </section>

      <section className="mb-10 bg-[--color-neutral-light]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[--color-primary-dark] mb-4">¿Dónde estamos?</h2>
          <p className="mb-6">Podés encontrarnos en el corazón de Buenos Aires, en UADE.</p>
          <Mapa />
        </div>
      </section>

    </main>
  );
};

export default Contacto;
