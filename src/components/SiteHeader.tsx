"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav, siteConfig } from "@/config/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      className={`fixed inset-x-0 top-0 z-30 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-ivory/90 shadow-[0_1px_0_rgba(46,36,33,0.14)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.75rem] w-full max-w-[1220px] items-center gap-8 px-6 sm:px-8 lg:px-12">
        <Link href="/" className="mr-auto flex shrink-0 items-center">
          <span className="relative block h-11 w-[7.25rem] overflow-hidden rounded-xl bg-rose">
            <Image
              src="/images/brand/birthwave-logo-white.png"
              alt={siteConfig.name}
              fill
              sizes="116px"
              className="object-contain p-2"
              priority
            />
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 text-sm text-muted lg:flex">
          {primaryNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 transition-colors after:absolute after:bottom-1 after:left-0 after:h-px after:bg-rose after:transition-[right] after:duration-200 ${
                  active ? "text-ink after:right-0" : "text-muted after:right-full hover:text-ink hover:after:right-0"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <a
            href={siteConfig.phoneHref}
            data-event="header_call"
            className="inline-flex min-h-[2.7rem] items-center rounded-full border border-ink/12 bg-white/50 px-4 text-sm font-semibold text-ink transition-colors hover:border-rose hover:bg-white"
          >
            Call
          </a>
          <a
            href="#book"
            data-event="header_book"
            className="inline-flex min-h-[2.7rem] items-center rounded-full bg-rose px-5 text-sm font-semibold text-white shadow-[0_10px_24px_-6px_rgba(202,149,133,0.55)] transition-colors hover:bg-deep"
          >
            Book Appointment
          </a>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full lg:hidden"
        >
          <span className="relative block h-4 w-5.5">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-5.5 bg-ink transition-transform duration-200 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-5.5 bg-ink transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-3 block h-0.5 w-5.5 bg-ink transition-transform duration-200 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        className={`grid gap-1 overflow-y-auto border-b border-ink/10 bg-ivory px-6 shadow-[0_18px_30px_rgba(46,36,33,0.1)] transition-[grid-template-rows] duration-300 lg:hidden ${
          open ? "grid-rows-[1fr] py-5" : "grid-rows-[0fr] py-0"
        }`}
        style={{ maxHeight: open ? "calc(100vh - 4.75rem)" : "0" }}
      >
        <div className="overflow-hidden">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-ink/10 py-3 text-base text-ink"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#book"
            data-event="mobile_menu_book"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-rose px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Book Appointment
          </a>
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noreferrer"
            data-event="mobile_menu_whatsapp"
            onClick={() => setOpen(false)}
            className="mt-2.5 block rounded-full border border-ink/12 px-5 py-3 text-center text-sm font-semibold text-ink"
          >
            WhatsApp Birthwave
          </a>
        </div>
      </nav>
    </header>
  );
}
