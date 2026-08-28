import Image from "next/image";
import { TextLink } from "@/components/home/TextLink";

/** Roles here follow Birthwave's verified care-team roster, which corrects a
 *  role swap present in the prototype (it listed the paediatrician under
 *  gynaecology and vice versa). Names, order and layout follow the reference. */
const doctors = [
  {
    odId: "doctor-bharathy",
    name: "Dr. Bharathy Kandasamy",
    role: "Gynaecology & fertility",
    image: "/images/team/dr-bharathy-kandasamy.png",
  },
  {
    odId: "doctor-sheethal",
    name: "Sheethal Sathya",
    role: "Childbirth education & lactation",
    image: "/images/team/sheethal-sathya.png",
  },
  {
    odId: "doctor-deepika",
    name: "Dr. Deepika Sivathanu",
    role: "Pediatric care",
    // No verified portrait on file — see docs/asset-gaps.md.
    image: null,
    initials: "DS",
  },
];

export function TeamSection() {
  return (
    <section
      id="team"
      data-od-id="team"
      className="bg-od-paper py-[76px] bp620:py-[clamp(84px,10vw,148px)]"
    >
      <div className="od-container">
        <div className="mb-[52px] max-w-[700px]">
          <p className="mb-[18px] text-xs font-bold tracking-[0.16em] text-od-rose uppercase">
            The people behind your care
          </p>
          <h2 className="font-display text-[43px] leading-[1.05] font-semibold tracking-[-0.045em] text-od-ink bp620:text-[clamp(38px,4.2vw,60px)]">
            Meet a team that listens.
          </h2>
          <p className="mt-[22px] max-w-[580px] text-base text-od-muted bp620:text-[17px]">
            A multidisciplinary care team supporting women, mothers, babies and families.
          </p>
        </div>

        <div className="grid items-start gap-[55px] bp1000:grid-cols-[0.8fr_1.2fr] bp1000:gap-[70px]">
          <article
            data-od-id="doctor-santoshini"
            className="grid items-end gap-5 bp620:grid-cols-2 bp620:gap-[30px]"
          >
            <div className="relative h-[360px] overflow-hidden rounded-[120px_20px_20px_20px] bg-od-sand bp620:h-[410px]">
              <Image
                src="/images/team/dr-santoshi-nandigam.png"
                alt="Portrait of Dr. Santoshi Nandigam, Founder of The Birthwave"
                fill
                sizes="(max-width: 620px) 90vw, 240px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="mb-[18px] text-xs font-bold tracking-[0.16em] text-od-rose uppercase">
                Featured care team
              </p>
              <h3 className="mb-2 font-display text-[30px] text-od-ink">Dr. Santoshi Nandigam</h3>
              <p className="mb-[18px] text-sm text-od-muted">
                Founder &middot; Obstetrician &amp; Gynaecologist
              </p>
              <TextLink href="/#contact">Book a consultation</TextLink>
            </div>
          </article>

          <div className="grid grid-cols-2 gap-4 bp620:grid-cols-3 bp620:gap-[22px]">
            {doctors.map((doctor, index) => (
              <article
                key={doctor.odId}
                data-od-id={doctor.odId}
                className={`group ${index === 2 ? "hidden bp620:block" : ""}`}
              >
                <div className="relative mb-3.5 h-[180px] overflow-hidden rounded-[70px_14px_14px_14px] bg-od-sand transition-transform duration-300 group-hover:-translate-y-1 bp620:h-[210px]">
                  {doctor.image ? (
                    <Image
                      src={doctor.image}
                      alt={`Portrait of ${doctor.name}`}
                      fill
                      sizes="(max-width: 620px) 45vw, 230px"
                      className="object-cover"
                    />
                  ) : (
                    <span
                      aria-hidden
                      className="grid h-full w-full place-items-center font-display text-[34px] font-semibold text-od-rose/55"
                    >
                      {doctor.initials}
                    </span>
                  )}
                </div>
                <h3 className="mb-0.5 font-display text-[21px] text-od-ink">{doctor.name}</h3>
                <p className="text-[13px] text-od-muted">{doctor.role}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
