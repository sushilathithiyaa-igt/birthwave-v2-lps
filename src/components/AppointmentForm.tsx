"use client";

import { useId, useState, type FormEvent } from "react";
import { buildWhatsAppEnquiryUrl } from "@/lib/enquiry";

type Props = {
  id?: string;
  heading?: string;
  service: string;
  sourcePage: string;
  submitLabel: string;
  showStageField?: boolean;
  showPreviousCesareanField?: boolean;
};

type Errors = Partial<Record<"name" | "phone", string>>;

export function AppointmentForm({
  id = "book",
  heading = "Request a consultation",
  service,
  sourcePage,
  submitLabel,
  showStageField = false,
  showPreviousCesareanField = false,
}: Props) {
  const uid = useId();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+91 ");
  const [preferredContact, setPreferredContact] = useState("Call");
  const [stage, setStage] = useState("");
  const [previousCesarean, setPreviousCesarean] = useState("Prefer to discuss");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Errors = {};
    if (name.trim().length < 2) nextErrors.name = "Please share your full name.";
    if (phone.replace(/\D/g, "").length < 10) nextErrors.phone = "Please share a valid mobile number.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const fields = [
      { label: "Name", value: name },
      { label: "Mobile", value: phone },
      { label: "Preferred contact", value: preferredContact },
      ...(showStageField ? [{ label: "Pregnancy stage", value: stage }] : []),
      ...(showPreviousCesareanField
        ? [{ label: "Previous C-section", value: previousCesarean }]
        : []),
      { label: "Message", value: message },
    ];

    const url = buildWhatsAppEnquiryUrl({ service, sourcePage, fields });
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        id={id}
        role="status"
        className="rounded-[28px_80px_28px_28px] bg-white p-7 shadow-[var(--shadow-soft)]"
      >
        <h3 className="font-display text-xl font-semibold text-ink">Thank you.</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          We&apos;ve opened WhatsApp with your enquiry details. Send the message and The Birthwave
          team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-5 text-sm font-semibold text-rose"
        >
          Edit and resend →
        </button>
      </div>
    );
  }

  return (
    <form
      id={id}
      aria-label={heading}
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[28px_80px_28px_28px] bg-white p-7 shadow-[var(--shadow-soft)]"
    >
      <h3 className="font-display text-xl font-semibold text-ink">{heading}</h3>

      <div className="mt-5 grid gap-1.5">
        <label htmlFor={`${uid}-name`} className="text-xs font-semibold text-ink">
          Full name
        </label>
        <input
          id={`${uid}-name`}
          name="name"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${uid}-name-error` : undefined}
          className="min-h-[2.9rem] w-full rounded-[10px] border border-ink/12 bg-ivory px-3 text-ink"
        />
        {errors.name && (
          <p id={`${uid}-name-error`} className="text-xs text-coral">
            {errors.name}
          </p>
        )}
      </div>

      <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor={`${uid}-phone`} className="text-xs font-semibold text-ink">
            Mobile number
          </label>
          <input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${uid}-phone-error` : undefined}
            className="min-h-[2.9rem] w-full rounded-[10px] border border-ink/12 bg-ivory px-3 text-ink"
          />
          {errors.phone && (
            <p id={`${uid}-phone-error`} className="text-xs text-coral">
              {errors.phone}
            </p>
          )}
        </div>
        <div className="grid gap-1.5">
          <label htmlFor={`${uid}-contact`} className="text-xs font-semibold text-ink">
            Preferred contact
          </label>
          <select
            id={`${uid}-contact`}
            name="preferredContact"
            value={preferredContact}
            onChange={(event) => setPreferredContact(event.target.value)}
            className="min-h-[2.9rem] w-full rounded-[10px] border border-ink/12 bg-ivory px-3 text-ink"
          >
            <option>Call</option>
            <option>WhatsApp</option>
          </select>
        </div>
      </div>

      {(showStageField || showPreviousCesareanField) && (
        <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {showStageField && (
            <div className="grid gap-1.5">
              <label htmlFor={`${uid}-stage`} className="text-xs font-semibold text-ink">
                Pregnancy stage <span className="font-normal text-muted">(optional)</span>
              </label>
              <input
                id={`${uid}-stage`}
                name="stage"
                placeholder="e.g. 18 weeks"
                value={stage}
                onChange={(event) => setStage(event.target.value)}
                className="min-h-[2.9rem] w-full rounded-[10px] border border-ink/12 bg-ivory px-3 text-ink placeholder:text-muted/70"
              />
            </div>
          )}
          {showPreviousCesareanField && (
            <div className="grid gap-1.5">
              <label htmlFor={`${uid}-csection`} className="text-xs font-semibold text-ink">
                Previous C-section <span className="font-normal text-muted">(optional)</span>
              </label>
              <select
                id={`${uid}-csection`}
                name="previousCesarean"
                value={previousCesarean}
                onChange={(event) => setPreviousCesarean(event.target.value)}
                className="min-h-[2.9rem] w-full rounded-[10px] border border-ink/12 bg-ivory px-3 text-ink"
              >
                <option>Prefer to discuss</option>
                <option>Yes</option>
                <option>Not sure</option>
              </select>
            </div>
          )}
        </div>
      )}

      <div className="mt-3 grid gap-1.5">
        <label htmlFor={`${uid}-message`} className="text-xs font-semibold text-ink">
          How can we help? <span className="font-normal text-muted">(optional)</span>
        </label>
        <textarea
          id={`${uid}-message`}
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={3}
          className="w-full resize-y rounded-[10px] border border-ink/12 bg-ivory px-3 py-2.5 text-ink"
        />
      </div>

      <p className="mt-3.5 text-[0.65rem] leading-relaxed text-muted">
        By submitting, you agree that The Birthwave team may contact you about this enquiry. This
        opens a pre-filled WhatsApp message — no appointment is confirmed until the team responds.
      </p>

      <button
        type="submit"
        data-event={`${sourcePage}_form_submit`}
        className="mt-4 inline-flex min-h-[3rem] w-full items-center justify-center gap-2.5 rounded-full bg-rose px-6 text-sm font-semibold text-white shadow-[0_10px_24px_-6px_rgba(202,149,133,0.55)] transition-transform hover:-translate-y-0.5 hover:bg-deep active:translate-y-0 active:scale-[0.98]"
      >
        {submitLabel} <span aria-hidden>→</span>
      </button>
    </form>
  );
}
