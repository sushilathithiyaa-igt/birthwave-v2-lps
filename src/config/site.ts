export const siteConfig = {
  name: "The Birthwave",
  legalName: "The Birthwave Gynecology and Children's Clinic",
  shortName: "Birthwave",
  doctorName: "Dr. Santoshi Nandigam",
  doctorByline: "By Dr. Santoshi Nandigam",
  description:
    "Thoughtful women's health, pregnancy, birth, postpartum, newborn and pediatric care in Nungambakkam, Chennai.",
  url: "https://www.thebirthwave.com",

  phoneDisplay: "+91 93630 31925",
  phoneHref: "tel:+919363031925",
  whatsappNumber: "919363031925",
  whatsappHref: "https://wa.me/919363031925",

  address: {
    line1: "8/15, Mahalingapuram Main Road",
    line2: "Mahalingapuram, Nungambakkam",
    city: "Chennai",
    state: "Tamil Nadu",
    postalCode: "600034",
    full: "8/15, Mahalingapuram Main Road, Mahalingapuram, Nungambakkam, Chennai, Tamil Nadu – 600034",
  },

  social: {
    instagram: "https://www.instagram.com/birthtoremember/",
    youtube: "https://www.youtube.com/@birthtoremember",
  },
} as const;

export const primaryNav = [
  { label: "Pregnancy Care", href: "/pregnancy-antenatal-care" },
  { label: "Natural Birth", href: "/natural-birth" },
  { label: "Normal Vaginal Delivery", href: "/normal-vaginal-delivery" },
  { label: "VBAC Consultation", href: "/vbac-consultation" },
] as const;

export const footerNav = [
  { label: "Home", href: "/" },
  ...primaryNav,
] as const;
