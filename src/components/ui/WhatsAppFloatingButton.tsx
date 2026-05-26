import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

export function WhatsAppFloatingButton() {
  const href = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    "Hola, quiero agendar una cita odontológica en Carepa."
  );

  return (
    <a
      className="whatsapp-floating"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar cita por WhatsApp"
    >
      <span className="whatsapp-floating__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path d="M12 3.5a8.5 8.5 0 0 0-7.35 12.78L3.8 20.2l4.01-.83A8.5 8.5 0 1 0 12 3.5Zm0 1.7a6.8 6.8 0 0 1 0 13.6 6.72 6.72 0 0 1-3.47-.96l-.28-.16-2.24.46.47-2.17-.18-.3A6.8 6.8 0 0 1 12 5.2Zm-2.4 3.52c-.16 0-.4.06-.6.3-.2.23-.78.76-.78 1.86s.8 2.16.92 2.31c.11.15 1.57 2.39 3.8 3.35.53.23.95.36 1.27.46.53.17 1.02.14 1.4.09.43-.06 1.32-.54 1.5-1.06.19-.52.19-.97.13-1.06-.05-.1-.2-.15-.43-.27-.22-.11-1.32-.65-1.52-.72-.2-.08-.35-.12-.5.11-.15.23-.57.72-.7.87-.13.15-.26.17-.48.06-.23-.12-.95-.35-1.82-1.12-.67-.6-1.12-1.33-1.25-1.56-.13-.23-.01-.35.1-.47.1-.1.23-.26.34-.39.11-.13.15-.23.23-.38.07-.15.04-.28-.02-.4-.06-.11-.5-1.2-.68-1.64-.18-.43-.36-.37-.5-.38h-.41Z" />
        </svg>
      </span>
      <span>WhatsApp</span>
    </a>
  );
}
