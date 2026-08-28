"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav, siteConfig } from "@/config/site";
import { useBookingSheet } from "@/components/BookingSheet";
import { landingPageBooking } from "@/config/landingPages";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { open: openBookingSheet } = useBookingSheet();

  // One global nav across all five review pages — Home and the four
  // landing pages. The booking config carries page/service context into
  // the enquiry flow no matter which page "Book Appointment" is clicked on.
  const navItems = mainNav;
  const bookingConfig = landingPageBooking[pathname ?? "/"] ?? landingPageBooking["/"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      data-od-id="site-header"
      className={`fixed inset-x-0 top-0 z-30 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-od-ivory/92 shadow-[0_1px_0_var(--color-od-line)] backdrop-blur-[18px]"
          : "bg-od-ivory/45 backdrop-blur-sm"
      }`}
    >
      <div className="od-container flex h-[72px] items-center gap-4 bp620:h-[82px] bp1280:gap-9">
        <Link
          href="/"
          data-od-id="brand"
          aria-label={`${siteConfig.name} home`}
          className="mr-auto flex shrink-0 items-center"
        >
          <span className="relative block h-[64px] w-[172px] shrink-0 overflow-hidden rounded-lg bg-od-brandmark">
            {/* Full lockup, including the "By Dr. Santoshi Nandigam" byline —
                the previous trimmed asset omitted it, which the client
                flagged as the logo not being clearly identifiable. */}
            <Image
              src="/images/brand/birthwave-logo-white-with-byline.png"
              alt={`${siteConfig.name} — by Dr. Santoshi Nandigam`}
              fill
              sizes="172px"
              className="object-contain p-2"
              priority
            />
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 text-sm whitespace-nowrap text-od-muted bp1280:flex"
        >
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 transition-colors after:absolute after:bottom-0.5 after:left-0 after:h-px after:bg-od-rose after:transition-[right] after:duration-250 ${
                  active
                    ? "text-od-ink after:right-0"
                    : "text-od-muted after:right-full hover:text-od-ink hover:after:right-0"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2.5 bp1280:flex">
          <a
            href={siteConfig.phoneHref}
            data-od-id="header-call"
            data-event="header_call"
            className="inline-flex min-h-[42px] items-center rounded-full border border-od-line bg-white/50 px-4 text-sm font-semibold whitespace-nowrap text-od-ink transition-colors hover:border-od-rose hover:bg-white"
          >
            Call
          </a>
          <button
            type="button"
            onClick={() => openBookingSheet(bookingConfig)}
            data-od-id="header-book-appointment"
            data-event="header_book"
            className="inline-flex min-h-[42px] items-center rounded-full bg-od-rose px-4 text-sm font-semibold whitespace-nowrap text-white shadow-[0_8px_18px_rgba(202,149,133,0.28)] transition-colors hover:bg-od-rose-deep"
          >
            Book Appointment
          </button>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          data-od-id="mobile-menu-toggle"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full bp1280:hidden"
        >
          <span className="relative block h-4 w-[22px]">
            <span
              className={`absolute top-0 left-0 block h-[1.5px] w-[22px] bg-od-ink transition-transform duration-250 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute top-[7px] left-0 block h-[1.5px] w-[22px] bg-od-ink transition-opacity duration-250 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute top-[14px] left-0 block h-[1.5px] w-[22px] bg-od-ink transition-transform duration-250 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        // `inert` keeps the collapsed menu out of the tab order and the
        // accessibility tree while still allowing the height transition.
        inert={!open}
        className={`grid overflow-y-auto border-b border-od-line bg-od-ivory px-7 shadow-[0_15px_28px_rgba(40,36,33,0.1)] transition-[grid-template-rows] duration-300 bp1280:hidden ${
          open ? "grid-rows-[1fr] py-5" : "grid-rows-[0fr] py-0"
        }`}
        style={{ maxHeight: open ? "calc(100dvh - 72px)" : "0" }}
      >
        <div className="overflow-hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-od-line py-3 text-[17px] text-od-ink"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.phoneHref}
            data-od-id="mobile-call"
            data-event="header_call"
            onClick={() => setOpen(false)}
            className="mt-3.5 block border-b border-od-line py-3 text-[17px] text-od-ink"
          >
            Call The Birthwave
          </a>
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noreferrer"
            data-od-id="mobile-whatsapp"
            data-event="whatsapp"
            onClick={() => setOpen(false)}
            className="mt-2.5 block rounded-full border border-od-line bg-white/50 px-5 py-3 text-center text-sm font-semibold text-od-ink"
          >
            WhatsApp Birthwave
          </a>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              openBookingSheet(bookingConfig);
            }}
            data-od-id="mobile-book-appointment"
            data-event="header_book"
            className="mt-2.5 block w-full rounded-full bg-od-rose px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Book Appointment
          </button>
        </div>
      </nav>
    </header>
  );
}
