import React, { useState } from "react";

// Importa los logos desde assets
import visaLogo from "../assets/images/visa.png";
import mastercardLogo from "../assets/images/mastercard.png";
import mercadopagoLogo from "../assets/images/mercadopago.png";
import efectivoLogo from "../assets/images/efectivo.png";

const paymentMethods = [
  { name: "Visa", img: visaLogo as string },
  { name: "Mastercard", img: mastercardLogo as string },
  { name: "Mercado Pago", img: mercadopagoLogo as string },
  { name: "Efectivo", img: efectivoLogo as string },
];

const initialForm = {
  nombre: "",
  email: "",
  cantidad: "1",
  fecha: "",
  metodo: "",
  tipo: "general",
};

const precios = {
  general: 5000,
  grupo: 4500,
  escolar: 4000,
};

const Boletos = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState(false);

  const total = precios[form.tipo as keyof typeof precios] * (Number(form.cantidad) || 1);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
    if (!form.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) newErrors.email = "Email inválido";
    if (!form.cantidad || isNaN(Number(form.cantidad)) || Number(form.cantidad) < 1) newErrors.cantidad = "Ingrese una cantidad válida";
    if (!form.fecha) newErrors.fecha = "Seleccione una fecha";
    if (!form.metodo) newErrors.metodo = "Seleccione un método de pago";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [e.target.name]: removed, ...rest } = errors;
    setErrors(rest);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSuccess(true);
      setForm(initialForm);
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <main className="w-full bg-[--color-neutral-light] min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8">

        <h1 className="text-3xl font-bold text-center text-[--color-primary-dark] mb-8">Comprar boletos</h1>

        <p className="mb-6 text-neutral-700 text-center">
          Reservá tus entradas para vivir la experiencia Aqualandia. Completá el formulario y elegí tu método de pago favorito.
        </p>

        {/* Métodos de pago */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2 text-primary text-center">Métodos de pago aceptados</h2>
          <div className="flex gap-6 justify-center flex-wrap">
            {paymentMethods.map((m) => (
              <div key={m.name} className="flex flex-col items-center">
                <img src={m.img} alt={m.name} className="h-10 mb-1" />
                <span className="text-xs text-neutral-600">{m.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} noValidate className="space-y-6">

          {/* Tipo de entrada */}
          <div>
            <label className="block font-semibold mb-2 text-[--color-neutral-dark]">Tipo de entrada</label>
            <select
              name="tipo"
              value={form.tipo}
              onChange={handleChange}
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
              name="cantidad"
              value={form.cantidad}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded border ${errors.cantidad ? "border-red-500" : "border-neutral-300"} focus:outline-none`}
              placeholder="Ej: 2"
            />
            {errors.cantidad && <span className="text-red-500 text-sm">{errors.cantidad}</span>}
          </div>

          {/* Fecha */}
          <div>
            <label className="block font-semibold mb-2 text-[--color-neutral-dark]">Fecha de visita</label>
            <input
              type="date"
              name="fecha"
              value={form.fecha}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded border ${errors.fecha ? "border-red-500" : "border-neutral-300"} focus:outline-none`}
              required
            />
            {errors.fecha && <span className="text-red-500 text-sm">{errors.fecha}</span>}
          </div>

          {/* Datos personales */}
          <div>
            <label className="block font-semibold mb-2 text-[--color-neutral-dark]">Nombre completo</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded border ${errors.nombre ? "border-red-500" : "border-neutral-300"} focus:outline-none`}
              placeholder="Ej: Juan Pérez"
              required
            />
            {errors.nombre && <span className="text-red-500 text-sm">{errors.nombre}</span>}
          </div>

          <div>
            <label className="block font-semibold mb-2 text-[--color-neutral-dark]">Email de contacto</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded border ${errors.email ? "border-red-500" : "border-neutral-300"} focus:outline-none`}
              placeholder="Ej: juan@email.com"
              required
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>

          {/* Método de pago */}
          <div>
            <label className="block font-semibold mb-2 text-[--color-neutral-dark]">Método de pago</label>
            <select
              name="metodo"
              value={form.metodo}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded border ${errors.metodo ? "border-red-500" : "border-neutral-300"} focus:outline-none`}
            >
              <option value="">Seleccioná un método</option>
              {paymentMethods.map((m) => (
                <option key={m.name} value={m.name}>{m.name}</option>
              ))}
            </select>
            {errors.metodo && <span className="text-red-500 text-sm">{errors.metodo}</span>}
          </div>

          {/* Total */}
          <div className="text-xl font-bold text-right text-[--color-primary]">
            Total: ${total}
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="mt-8 w-full bg-primary text-white py-3 rounded-full font-bold hover:bg-primary-dark transition"
          >
            Comprar
          </button>
          {success && (
            <div className="mt-4 text-green-600 font-semibold text-center">
              ¡Compra realizada con éxito! Te enviamos un email con los detalles.
            </div>
          )}
        </form>
      </div>
    </main>
  );
};

export default Boletos;
