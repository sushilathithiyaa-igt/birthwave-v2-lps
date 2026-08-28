"use client";

import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { landingPageBooking } from "@/config/landingPages";
import { BookTrigger } from "@/components/BookTrigger";

export function MobileActionBar() {
  const pathname = usePathname();
  const bookingConfig = landingPageBooking[pathname];

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[0.8fr_1fr_1.3fr] gap-2 border-t border-ink/12 bg-paper/95 p-2.5 backdrop-blur-md sm:hidden"
      style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
    >
      <a
        href={siteConfig.phoneHref}
        data-event="mobile_bar_call"
        className="grid min-h-[3rem] place-items-center rounded-xl border border-ink/12 text-xs font-semibold text-deep"
      >
        Call
      </a>
      <a
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noreferrer"
        data-event="mobile_bar_whatsapp"
        className="grid min-h-[3rem] place-items-center rounded-xl border border-ink/12 text-xs font-semibold text-deep"
      >
        WhatsApp
      </a>
      {bookingConfig ? (
        <BookTrigger
          config={bookingConfig}
          data-event="mobile_bar_book"
          withArrow={false}
          className="w-full min-h-[3rem] rounded-xl text-xs"
        >
          Book Appointment
        </BookTrigger>
      ) : (
        <a
          href="#book"
          data-event="mobile_bar_book"
          className="grid min-h-[3rem] place-items-center rounded-xl bg-rose text-xs font-semibold text-white"
        >
          Book Appointment
        </a>
      )}
    </div>
  );
}
