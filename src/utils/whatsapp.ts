const DEFAULT_COUNTRY_CODE = "57";

export function normalizeWhatsAppNumber(phone: string): string {
  const digits = phone.replace(/\D/g, "");

  if (digits.startsWith(DEFAULT_COUNTRY_CODE)) {
    return digits;
  }

  return `${DEFAULT_COUNTRY_CODE}${digits}`;
}

export function getWhatsAppUrl(phone: string, message: string): string {
  const normalizedPhone = normalizeWhatsAppNumber(phone);
  const encodedMessage = encodeURIComponent(message.trim());

  return `https://wa.me/${normalizedPhone}?text=${encodedMessage}`;
}
