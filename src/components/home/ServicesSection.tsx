import Link from "next/link";
import { TextLink } from "@/components/home/TextLink";

type Service = {
  odId: string;
  index: string;
  title: string;
  copy: string;
  href: string;
  /** Column spans on the reference's 12-column mosaic. */
  span: string;
  feature?: boolean;
};

const services: Service[] = [
  {
    odId: "service-womens-health",
    index: "01",
    title: "Women's Health & Gynaecology",
    copy: "Menstrual health, hormonal concerns, preventive and general care.",
    href: "/#contact",
    span: "col-span-1 bp620:col-span-4",
  },
  {
    odId: "service-fertility",
    index: "02",
    title: "Fertility & Preconception",
    copy: "Planning pregnancy, evaluation, support and counselling.",
    href: "/#contact",
    span: "col-span-1 bp620:col-span-4",
  },
  {
    odId: "service-pregnancy",
    index: "03",
    title: "Pregnancy Care",
    copy: "Antenatal monitoring, nutrition guidance and birth preparation.",
    // The one card in this mosaic with a dedicated page already built.
    href: "/pregnancy-antenatal-care",
    span: "col-span-2 bp620:col-span-4",
    feature: true,
  },
  {
    odId: "service-birth",
    index: "04",
    title: "Birth & Delivery Care",
    copy: "Natural birth preparation, vaginal delivery support and VBAC counselling.",
    href: "/#focus",
    span: "col-span-1 bp620:col-span-6",
  },
  {
    odId: "service-postpartum",
    index: "05",
    title: "Postpartum Recovery",
    copy: "Recovery, breastfeeding and post-delivery wellbeing.",
    href: "/#contact",
    span: "col-span-1 bp620:col-span-3",
  },
  {
    odId: "service-newborn",
    index: "06",
    title: "Newborn & Children's Care",
    copy: "Newborn consultations, pediatric care and vaccinations.",
    href: "/#contact",
    span: "col-span-1 bp620:col-span-3",
  },
  {
    odId: "service-holistic",
    index: "07",
    title: "Supportive & Holistic Care",
    copy: "Nutrition, movement, pregnancy wellbeing and counselling.",
    href: "/#contact",
    span: "col-span-1 bp620:col-span-6",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      data-od-id="services"
      className="bg-od-sand py-[76px] bp620:py-[clamp(84px,10vw,148px)]"
    >
      <div className="od-container">
        <div className="mb-[35px] block bp620:mb-[52px] bp1000:flex bp1000:items-end bp1000:justify-between bp1000:gap-[30px]">
          <div className="max-w-[700px]">
            <p className="mb-[18px] text-xs font-bold tracking-[0.16em] text-od-rose uppercase">
              Our care
            </p>
            <h2 className="font-display text-[43px] leading-[1.05] font-semibold tracking-[-0.045em] text-od-ink bp620:text-[clamp(38px,4.2vw,60px)]">
              Care designed around every stage.
            </h2>
            <p className="mt-[22px] max-w-[580px] text-base text-od-muted bp620:text-[17px]">
              A connected care ecosystem for women, mothers, babies and children.
            </p>
          </div>
          <TextLink href="/#contact" className="mt-[22px] shrink-0 bp1000:mt-0">
            Find the right care
          </TextLink>
        </div>

        <div className="grid grid-cols-2 gap-2.5 bp620:grid-cols-12 bp620:gap-[14px]">
          {services.map((service) => (
            <Link
              key={service.odId}
              href={service.href}
              data-od-id={service.odId}
              className={`group flex min-h-[215px] min-w-0 flex-col rounded-[20px] border p-5 transition-[transform,box-shadow,background] duration-300 hover:-translate-y-[5px] hover:shadow-[var(--shadow-od)] bp620:min-h-[220px] bp620:p-[27px] ${service.span} ${
                service.feature
                  ? "border-transparent bg-od-rose text-white hover:bg-[#835951]"
                  : "border-[rgba(70,55,48,0.1)] bg-white/68 hover:bg-white"
              }`}
            >
              <span
                className={`mb-auto font-display text-sm ${
                  service.feature ? "text-[#f3d8d1]" : "text-od-rose"
                }`}
              >
                {service.index}
              </span>
              <h3
                // Fluid below 620 so the longest single words ("Gynaecology",
                // "Preconception") still fit the two-up card without breaking
                // mid-word; the reference's fixed 23px overflows here.
                className={`mt-[18px] mb-[9px] font-display text-[clamp(16px,4.6vw,23px)] leading-[1.08] tracking-[-0.02em] break-words bp620:text-[26px] ${
                  service.feature ? "text-white" : "text-od-ink"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-[13px] leading-[1.5] bp620:text-sm ${
                  service.feature ? "text-white/82" : "text-od-muted"
                }`}
              >
                {service.copy}
              </p>
              <span
                className={`mt-[19px] text-[13px] font-bold ${
                  service.feature ? "text-white/82" : "text-od-rose"
                }`}
              >
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
