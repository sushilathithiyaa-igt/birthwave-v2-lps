import Image from "next/image";

/**
 * The reference fills this composition with prototype testimonial copy
 * ("A new mother", "A family in Chennai"). Those quotes are not verified, and
 * publishing invented patient words is off-limits, so the panels carry
 * authentic photography of the clinic instead. The geometry — one large panel
 * beside two stacked panels, same ratios, radii and gaps — is unchanged.
 */
export function ClinicProofSection() {
  return (
    <section
      data-od-id="testimonials"
      className="bg-od-sand py-[76px] bp620:py-[clamp(84px,10vw,148px)]"
    >
      <div className="od-container">
        <div className="max-w-[700px]">
          <p className="mb-[18px] text-xs font-bold tracking-[0.16em] text-od-rose uppercase">
            Inside The Birthwave
          </p>
          <h2 className="font-display text-[43px] leading-[1.05] font-semibold tracking-[-0.045em] text-od-ink bp620:text-[clamp(38px,4.2vw,60px)]">
            A space designed to feel calm.
          </h2>
        </div>

        <div className="mt-[50px] grid gap-[18px] bp620:grid-cols-[1.12fr_0.88fr]">
          <div
            data-od-id="testimonial-one"
            className="relative min-h-[300px] overflow-hidden rounded-3xl bg-od-rose bp620:min-h-[352px]"
          >
            <Image
              src="/images/home/clinic-lounge.jpg"
              alt="The waiting lounge at The Birthwave clinic, with soft lighting and a lit arched alcove"
              fill
              sizes="(max-width: 1000px) 92vw, 707px"
              className="object-cover"
            />
          </div>

          {/* Stack rows are weighted so the two panels sum to the feature
              panel's height with the reference's 180 / 154 split. */}
          <div className="grid grid-cols-2 gap-[18px] bp620:grid-cols-1 bp620:grid-rows-[1.169fr_1fr]">
            <div
              data-od-id="testimonial-two"
              className="relative min-h-[180px] overflow-hidden rounded-3xl bg-od-paper bp620:min-h-0"
            >
              <Image
                src="/images/home/clinic-signage-wall.jpg"
                alt="The Birthwave wordmark backlit on the consultation wing wall"
                fill
                sizes="(max-width: 1000px) 45vw, 555px"
                className="object-cover"
              />
            </div>
            <div
              data-od-id="testimonial-three"
              className="relative min-h-[180px] overflow-hidden rounded-3xl bg-od-paper bp620:min-h-0"
            >
              <Image
                src="/images/home/clinic-consult-lounge.jpg"
                alt="Seating and consulting alcoves inside The Birthwave clinic"
                fill
                sizes="(max-width: 1000px) 45vw, 555px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
