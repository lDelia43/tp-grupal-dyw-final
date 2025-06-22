export default function Footer() {
  return (
    <footer className="bg-nature text-neutral-300 py-6 px-4 mt-auto w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 md:gap-0">
        <p className="text-sm">&copy; {new Date().getFullYear()} TP Grupal. Todos los derechos reservados.</p>
        <p className="text-sm">PROFESORA LITOVICUIS, PATRICIA CARINA</p>
        <p className="text-sm">EQUIPO 6</p>
        <p className="text-sm">516035 - 2025-1C - VIRTUAL</p>
      </div>
    </footer>
  )
}
