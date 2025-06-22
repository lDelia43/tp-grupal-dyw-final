import Mapa from "../lib/components/map/Map";

const Contacto = () => {
  return (
    <main className="w-full">

      {/* FORMULARIO + DATOS */}
      <section className="py-20 bg-[--color-neutral-light]">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">

          {/* FORMULARIO */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-[--color-primary-dark] mb-4">Escribinos</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-[--color-neutral-dark]">Nombre</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[--color-neutral-dark]">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[--color-neutral-dark]">Asunto</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[--color-neutral-dark]">Mensaje</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[--color-primary] text-white px-6 py-2 rounded-md hover:bg-[--color-primary-dark] transition"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* DATOS DE CONTACTO */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[--color-primary-dark] mb-6">Información de contacto</h2>
            <ul className="space-y-4 text-[--color-neutral-dark] text-lg">
              <li>
                📍 Dirección: Lima 717, CABA
              </li>
              <li>
                📞 Teléfono: (011) 4000-0000
              </li>
              <li>
                📧 Email: contacto@Aqualandia.com.ar
              </li>
              <li>
                🕒 Horarios: Lunes a Domingo de 10 a 18 hs
              </li>
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
