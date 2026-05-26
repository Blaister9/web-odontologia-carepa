import { useState } from "react";

import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { Button } from "../ui/Button";

const navItems = [
  { label: "Necesidad", href: "#que-necesitas" },
  { label: "Servicios", href: "#servicios" },
  { label: "Primera cita", href: "#primera-cita" },
  { label: "Doctora", href: "#doctora" },
  { label: "Urgencias", href: "#urgencias" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Preguntas", href: "#preguntas" }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const appointmentUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, estoy en Carepa y quiero agendar una valoración odontológica. ¿Me pueden orientar con disponibilidad?"
  );

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="site-header__brand" href="#inicio" aria-label="Ir al inicio">
          <span className="site-header__mark" aria-hidden="true">
            OC
          </span>
          <span>
            <strong>{siteConfig.clinicName}</strong>
            <small>
              {siteConfig.city}, {siteConfig.department}
            </small>
          </span>
        </a>

        <nav className="site-header__nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <Button href={appointmentUrl} target="_blank" size="sm">
            Agendar cita
          </Button>
          <button
            className="menu-toggle"
            type="button"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`} id="mobile-menu">
        <div className="container mobile-menu__inner">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
          <Button href={appointmentUrl} target="_blank" fullWidth>
            Agendar por WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
}
