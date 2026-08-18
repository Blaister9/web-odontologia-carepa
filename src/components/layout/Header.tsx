import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { Button } from "../ui/Button";

const navItems = [
  { label: "Necesidad", href: "/#que-necesitas" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Doctora", href: "/#doctora" },
  { label: "Urgencias", href: "/#urgencias" },
  { label: "Consultorio", href: "/consultorio" },
  { label: "Equipo", href: "/equipo" }
];

type HeaderProps = {
  homeMode?: boolean;
};

export function Header({ homeMode = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const appointmentUrl = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, estoy en Carepa y quiero agendar una valoración odontológica. ¿Me pueden orientar con disponibilidad?"
  );

  useEffect(() => {
    if (!isOpen) return;

    mobileMenuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      menuButtonRef.current?.focus();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <header className={`site-header${homeMode ? " site-header--home" : ""}`}>
      <div className="container site-header__inner">
        <Link className="site-header__brand" href="/" aria-label="Ir al inicio">
          <span className="site-header__mark" aria-hidden="true">
            {siteConfig.brandInitials}
          </span>
          <span className="site-header__brand-text">
            <strong>{siteConfig.doctorName}</strong>
            <small>Consultorio odontológico · Carepa</small>
          </span>
        </Link>

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
            ref={menuButtonRef}
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

      <div
        ref={mobileMenuRef}
        className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}
        id="mobile-menu"
      >
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
