import React, { useState } from "react";

const precios = {
  general: 5000,
  grupo: 4500,
  escolar: 4000,
};

const Boletos = () => {
  const [tipo, setTipo] = useState<"general" | "grupo" | "escolar">("general");
  const [cantidad, setCantidad] = useState(1);
  const [fecha, setFecha] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const total = precios[tipo] * cantidad;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Compra realizada por ${nombre} para el día ${fecha}.\nTotal: $${total}`);
  };

  return (
    <main className="w-full bg-[--color-neutral-light] min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8">

        <h1 className="text-3xl font-bold text-center text-[--color-primary-dark] mb-8">Comprar boletos</h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Tipo de entrada */}
          <div>
            <label className="block font-semibold mb-2 text-[--color-neutral-dark]">Tipo de entrada</label>
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value as "general" | "grupo" | "escolar")}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
            >
              <option value="general">General - ${precios.general}</option>
              <option value="grupo">Grupal (4+) - ${precios.grupo}</option>
              <option value="escolar">Escolar - ${precios.escolar}</option>
            </select>
          </div>

          {/* Cantidad */}
          <div>
            <label className="block font-semibold mb-2 text-[--color-neutral-dark]">Cantidad</label>
            <input
              type="number"
              min={1}
              value={cantidad}
              onChange={(e) => setCantidad(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
            />
          </div>

          {/* Fecha */}
          <div>
            <label className="block font-semibold mb-2 text-[--color-neutral-dark]">Fecha de visita</label>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
              required
            />
          </div>

          {/* Datos personales */}
          <div>
            <label className="block font-semibold mb-2 text-[--color-neutral-dark]">Nombre completo</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-[--color-neutral-dark]">Email de contacto</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
              required
            />
          </div>

          {/* Total */}
          <div className="text-xl font-bold text-right text-[--color-primary]">
            Total: ${total}
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-[--color-primary] text-white py-3 rounded-md font-semibold hover:bg-[--color-primary-dark] transition"
          >
            Confirmar compra
          </button>

        </form>
      </div>
    </main>
  );
};

export default Boletos;
