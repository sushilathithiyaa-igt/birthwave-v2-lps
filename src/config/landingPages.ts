import type { BookingConfig } from "@/components/BookingSheet";

/**
 * Per-route booking config for the four service landing pages, shared by
 * every trigger that can open the booking sheet on that route (hero CTA,
 * quick-actions rail, mobile action bar, related-care cross-links). Keeps
 * the "service" context that reaches the enquiry transport consistent
 * everywhere a booking starts from a given page.
 */
export const landingPageBooking: Record<string, BookingConfig> = {
  "/": {
    service: "General Enquiry",
    sourcePage: "Homepage",
    submitLabel: "Book an Appointment",
  },
  "/pregnancy-antenatal-care": {
    service: "Pregnancy & Antenatal Care",
    sourcePage: "Pregnancy & Antenatal Care",
    submitLabel: "Book an Appointment",
    showStageField: true,
  },
  "/natural-birth": {
    service: "Natural Birth",
    sourcePage: "Natural Birth",
    submitLabel: "Book a Consultation",
  },
  "/normal-vaginal-delivery": {
    service: "Normal Vaginal Delivery",
    sourcePage: "Normal Vaginal Delivery",
    submitLabel: "Discuss Your Birth Plan",
  },
  "/vbac-consultation": {
    service: "VBAC Consultation",
    sourcePage: "VBAC Consultation",
    submitLabel: "Book a VBAC Consultation",
    showPreviousCesareanField: true,
  },
};
