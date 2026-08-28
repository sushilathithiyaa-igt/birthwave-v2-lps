"use client";

import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { landingPageBooking } from "@/config/landingPages";
import { useBookingSheet } from "@/components/BookingSheet";

/** Desktop-only floating vertical rail (Call / WhatsApp / Book), fixed to
 * the right edge — matches the reference's `.quick-actions`. Rendered only
 * on the four service pages, where the reference defines it; the homepage
 * export has no such rail. */
export function QuickActionsRail() {
  const pathname = usePathname();
  const bookingConfig = landingPageBooking[pathname];
  const { open } = useBookingSheet();

  if (!bookingConfig) return null;

  return (
    <div
      aria-label="Quick actions"
      className="fixed top-[44%] right-[18px] z-20 hidden grid-cols-1 gap-2 bp620:grid"
    >
      <a
        href={siteConfig.phoneHref}
        data-event="quick_actions_call"
        className="grid h-[52px] w-[52px] place-items-center rounded-[18px_18px_8px_18px] border border-ink/12 bg-white/88 text-[11px] font-semibold text-deep shadow-[0_8px_24px_rgba(90,64,58,0.12)] transition-transform duration-200 hover:-translate-x-1"
      >
        Call
      </a>
      <a
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noreferrer"
        data-event="quick_actions_whatsapp"
        className="grid h-[52px] w-[52px] place-items-center rounded-[18px_18px_8px_18px] border border-ink/12 bg-white/88 text-[11px] font-semibold text-deep shadow-[0_8px_24px_rgba(90,64,58,0.12)] transition-transform duration-200 hover:-translate-x-1"
      >
        WA
      </a>
      <button
        type="button"
        onClick={() => open(bookingConfig)}
        data-event="quick_actions_book"
        className="grid h-[52px] w-[52px] place-items-center rounded-[18px_18px_8px_18px] border border-ink/12 bg-rose text-[11px] font-semibold text-white shadow-[0_8px_24px_rgba(90,64,58,0.12)] transition-transform duration-200 hover:-translate-x-1"
      >
        Book
      </button>
    </div>
  );
}
