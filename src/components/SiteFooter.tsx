"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerNav, siteConfig } from "@/config/site";
import { useBookingSheet } from "@/components/BookingSheet";
import { landingPageBooking } from "@/config/landingPages";

/**
 * ONE footer, used identically on all five review pages: Explore (Home +
 * the four landing pages), Contact (Call, WhatsApp, Book Appointment) and
 * verified social links. No route branching — the earlier per-route
 * "Related care" / two-breakpoint-system footer has been retired in favour
 * of this single, consistent footer for the client-review round.
 */
export function SiteFooter() {
  const pathname = usePathname();
  const { open: openBookingSheet } = useBookingSheet();
  const bookingConfig = landingPageBooking[pathname ?? "/"] ?? landingPageBooking["/"];

  return (
    <footer data-od-id="footer" className="bg-ink py-16 text-white">
      <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
        <div className="grid gap-8 pb-12 bp620:grid-cols-2 bp620:gap-[42px] bp1000:grid-cols-[1.25fr_0.7fr_1fr] bp1000:gap-[70px]">
          <div className="bp620:col-span-2 bp1000:col-span-1">
            <Link href="/" className="mb-4 inline-flex items-center">
              <span className="relative block aspect-[4237/2052] h-12 overflow-hidden rounded-xl bg-rose px-3 py-2">
                <Image
                  src="/images/brand/birthwave-logo-white-with-byline.png"
                  alt={`${siteConfig.name} — by Dr. Santoshi Nandigam`}
                  fill
                  sizes="170px"
                  className="object-contain"
                />
              </span>
            </Link>
            <p className="max-w-[300px] text-sm text-white/65">{siteConfig.description}</p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-[0.14em] text-blush uppercase">
              Explore
            </h3>
            <div className="grid gap-2 text-sm text-white/70">
              {footerNav.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-[0.14em] text-blush uppercase">
              Contact
            </h3>
            <p className="max-w-[300px] text-sm text-white/70">
              {siteConfig.legalName}
              <br />
              {siteConfig.address.full}
            </p>
            <a href={siteConfig.phoneHref} className="mt-3 block text-sm text-white/70 hover:text-white">
              Call {siteConfig.phoneDisplay}
            </a>
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-1 block text-sm text-white/70 hover:text-white"
            >
              WhatsApp The Birthwave
            </a>
            <button
              type="button"
              onClick={() => openBookingSheet(bookingConfig)}
              className="mt-1 block text-left text-sm text-white/70 hover:text-white"
            >
              Book an Appointment
            </button>
            <div className="mt-4 flex gap-4 text-sm text-white/70">
              <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="hover:text-white">
                Instagram
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noreferrer" className="hover:text-white">
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/15 pt-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The Birthwave. Information shown is for general education and does not replace an individual medical consultation.</p>
        </div>
      </div>
    </footer>
  );
}
