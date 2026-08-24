import { siteConfig } from "@/config/site";

export type EnquiryField = {
  label: string;
  value: string;
};

export type EnquiryPayload = {
  service: string;
  sourcePage: string;
  fields: EnquiryField[];
};

/**
 * Transport adapter: today this renders a structured enquiry as a WhatsApp
 * deep link. Swap the body of this function for a real leads API call later
 * without touching any call site.
 */
export function buildWhatsAppEnquiryUrl({ service, sourcePage, fields }: EnquiryPayload): string {
  const lines = [
    `New enquiry: ${service}`,
    `Page: ${sourcePage}`,
    "",
    ...fields
      .filter((field) => field.value.trim().length > 0)
      .map((field) => `${field.label}: ${field.value.trim()}`),
  ];

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

/** Quick WhatsApp deep link for a topic that doesn't yet have a dedicated page. */
export function buildWhatsAppTopicUrl(topic: string): string {
  const text = encodeURIComponent(`I'd like to know more about ${topic} at Birthwave.`);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

/** Patient-voiced appointment request, for CTAs that aren't attached to a form. */
export function buildWhatsAppAppointmentUrl(context?: string): string {
  const text = encodeURIComponent(
    context
      ? `Hello Birthwave, I'd like to book an appointment (${context}).`
      : "Hello Birthwave, I'd like to book an appointment."
  );
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
