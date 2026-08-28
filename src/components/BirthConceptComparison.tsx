/**
 * A short, explicit comparison between Natural Birth (an approach to
 * labour/birth) and Normal Vaginal Delivery (the route of birth) — the
 * two are related but not interchangeable, and this makes that distinction
 * unambiguous wherever both concepts are discussed. Reuses the site's
 * existing hairline-row / numbered-principle visual language rather than
 * introducing a new composition.
 */
export function BirthConceptComparison({ className = "" }: { className?: string }) {
  return (
    <section
      data-od-id="birth-concepts"
      className={`py-[clamp(4.5rem,9vw,7.5rem)] ${className}`}
    >
      <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
        <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-rose uppercase">
          Two related, different things
        </p>
        <h2 className="max-w-[640px] font-display text-[clamp(2rem,3.6vw,2.8rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-ink">
          Natural Birth and Normal Vaginal Delivery aren&apos;t the same question.
        </h2>

        <div className="mt-10 grid gap-10 border-t border-ink/10 bp1050:grid-cols-2 bp1050:gap-16">
          <div className="border-b border-ink/10 py-7 bp1050:border-b-0 bp1050:border-r bp1050:pr-16">
            <p className="mb-2 text-xs font-semibold tracking-[0.14em] text-rose uppercase">
              An approach to labour and birth
            </p>
            <h3 className="mb-3 font-display text-2xl font-semibold text-ink">Natural Birth</h3>
            <p className="text-[0.98rem] leading-relaxed text-muted">
              How you prepare for and experience labour — physiological progression, movement,
              breathing, relaxation, comfort measures and informed choice, with fewer routine
              interventions where clinically appropriate. It describes an approach, not which way
              your baby is born.
            </p>
          </div>
          <div className="py-7">
            <p className="mb-2 text-xs font-semibold tracking-[0.14em] text-rose uppercase">
              The route of birth
            </p>
            <h3 className="mb-3 font-display text-2xl font-semibold text-ink">
              Normal Vaginal Delivery
            </h3>
            <p className="text-[0.98rem] leading-relaxed text-muted">
              Birth through the vagina rather than by Caesarean section. It may involve pain-relief
              options and other appropriate obstetric care depending on your preferences and
              clinical needs — it describes the route your baby is born, not the approach taken to
              get there.
            </p>
          </div>
        </div>

        <p className="mt-8 max-w-[720px] text-[0.98rem] leading-relaxed text-muted italic">
          Neither is a promise, and neither is the &ldquo;right&rdquo; choice for everyone. The
          approach that may be appropriate for you depends on your pregnancy, your preferences and
          your individual clinical circumstances — discuss this with your obstetrician.
        </p>
      </div>
    </section>
  );
}
