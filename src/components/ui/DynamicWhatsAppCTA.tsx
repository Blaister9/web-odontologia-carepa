import { siteConfig } from "@/data/site";
import { trackWhatsAppClick } from "@/utils/tracking";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { Button } from "./Button";
import { WhatsAppIcon } from "./WhatsAppIcon";

type DynamicWhatsAppCTAProps = {
  label: string;
  message: string;
  ctaLocation: string;
  variant?: "primary" | "emergency";
  serviceSlug?: string;
  fullWidth?: boolean;
  className?: string;
};

export function DynamicWhatsAppCTA({
  label,
  message,
  ctaLocation,
  variant = "primary",
  serviceSlug,
  fullWidth = false,
  className
}: DynamicWhatsAppCTAProps) {
  const href = getWhatsAppUrl(siteConfig.whatsappNumber, message);

  return (
    <Button
      href={href}
      target="_blank"
      size="lg"
      variant={variant}
      fullWidth={fullWidth}
      className={className}
      onClick={() => trackWhatsAppClick({ ctaLocation, serviceSlug })}
    >
      <WhatsAppIcon className="button__icon" />
      {label}
    </Button>
  );
}
