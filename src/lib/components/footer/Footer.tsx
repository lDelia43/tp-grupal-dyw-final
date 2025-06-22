import uadeLogo from "../../../assets/images/uade.png"; // Ajusta la ruta si es necesario

const integrantes = [
  "Leonel Jesus D Elia",
  "Nombre Apellido 2",
  "Nombre Apellido 3",
  // Agrega más si es necesario
];

export default function Footer() {
  return (
    <footer className="w-full bg-nature text-white py-6 px-4 border-t border-primary/20 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Integrantes y leyenda */}
        <div className="text-center md:text-left">
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
            className="underline text-accent hover:text-accent-dark text-sm"
          >
            Sitio del grupo
          </a>
          <div className="mt-2 text-xs">
            Trabajo grupal - Materia Diseño y Desarrollo Web (Comisión 11842 - Grupo 6)
          </div>
        </div>
        {/* Logo UADE */}
        <div className="flex items-center justify-center">
          <img
            src={uadeLogo}
            alt="Logo UADE"
            className="h-12 w-auto bg-white rounded shadow p-2"
          />
        </div>
      </div>
    </footer>
  );
}
