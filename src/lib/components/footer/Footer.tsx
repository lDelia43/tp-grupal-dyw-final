import uadeLogo from "../../../assets/images/uade.png";

const integrantes = [
  "Leonel Jesus D Elia",
  "Matias Ariel Lepe",
  "Bautista Lammertyn",
  // Agrega más si es necesario
];

export default function Footer() {
  return (
    <footer className="w-full bg-nature text-white py-6 px-4 mt-auto md:z-100">
      <div className="max-w-6xl mx-auto flex flex-col items-center md:flex-row md:items-center justify-between gap-6">
        {/* Integrantes y leyenda */}
        <div className="text-center md:text-left flex-1">
          <div className="font-semibold mb-1">Integrantes:</div>
          <ul className="text-sm mb-2">
            {integrantes.map((nombre) => (
              <li key={nombre}>{nombre}</li>
            ))}
          </ul>
          <a
            href="https://ldelia43.github.io/tp-grupal-dyw-final/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-accent hover:text-accent-dark text-sm block mb-1"
          >
            Sitio del grupo
          </a>
          <a
            href="/mapa"
            className="underline text-accent hover:text-accent-dark text-sm block mb-1"
          >
            Mapa del sitio
          </a>
          <div className="mt-2 text-xs">
            Trabajo grupal - Materia Diseño y Desarrollo Web (Comisión 11842 - Grupo 6)
          </div>
          <div className="mt-1 text-xs font-semibold">
            PROFESORA: LITOVICUIS, PATRICIA CARINA
          </div>
        </div>
        {/* Logo UADE centrado en mobile */}
        <div className="flex justify-center w-full md:w-auto mt-6 md:mt-0">
          <img
            src={uadeLogo}
            alt="Logo UADE"
            className="h-12 w-auto bg-white rounded shadow p-2 max-w-[100px]"
          />
        </div>
      </div>
    </footer>
  );
}
