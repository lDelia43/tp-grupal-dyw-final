import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Activity, Box, Home } from "lucide-react";

const links = [
  { to: "/avances", label: "Avances", icon: <Activity size={20} /> },
  { to: "/proyecto", label: "Proyecto", icon: <Box size={20} /> },
  { to: "/", label: "Home", icon: <Home size={20} /> },
];

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isMobile: boolean;
}

export default function Sidebar({ isOpen, setIsOpen, isMobile }: SidebarProps) {
  const location = useLocation();
  const [userToggled, setUserToggled] = useState(false);

  const toggleSidebar = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
      setUserToggled(true);
    }
  };

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(true);
    }
    if(isMobile){
      setIsOpen(false);
    }
  }, [isMobile, setIsOpen]);

  useEffect(() => {
    if (userToggled) {
      const timeout = setTimeout(() => setUserToggled(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [userToggled]);

  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false);
      setUserToggled(true);
    }
  };

  return (
    <div>
      {/* Botón hamburguesa / cerrar solo en mobile */}
      {isMobile && !isOpen && (
        <button
          onClick={toggleSidebar}
          className="md:hidden fixed top-4 right-4 z-50 text-neutral-900 bg-white p-2 rounded shadow"
          aria-label="Toggle sidebar"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* Overlay en mobile cuando sidebar abierto */}
      {isMobile && isOpen && (
        <div
          onClick={() => {
            setIsOpen(false);
            setUserToggled(true);
          }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full bg-nature text-white z-40
          transform
          ${
            userToggled && isMobile
              ? "transition-all duration-300 ease-in-out"
              : ""
          }
          ${
            isMobile
              ? isOpen
                ? "translate-x-0 w-64"
                : "-translate-x-full w-64"
              : "w-64 translate-x-0 relative"
          }
          flex flex-col
          md:flex-shrink-0
        `}
      >
        {/* No mostrar botón toggle en desktop */}
        {isMobile && (
          <button
            onClick={toggleSidebar}
            className="self-end m-4 p-2 rounded hover:bg-accent transition"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}

        {/* Título solo cuando abierto */}
        {isOpen && (
          <h2 className="text-2xl font-bold mb-8 px-4 select-none mt-12">
            Aqualandia
          </h2>
        )}

        {/* Links */}
        <nav className="flex flex-col flex-1">
          {links.map(({ to, label, icon }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                onClick={handleLinkClick}
                className={`
                  flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-accent transition
                  ${active ? "bg-accent font-semibold" : ""}
                  ${!isOpen && "justify-center"}
                `}
              >
                <span className="text-neutral-300">{icon}</span>
                {isOpen && <span>{label}</span>}
              </Link>
            );
          })}
        </nav>
      </aside>
    </div>
  );
}
