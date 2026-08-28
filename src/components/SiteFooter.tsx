"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerNav, primaryNav, siteConfig } from "@/config/site";

export function SiteFooter() {
  const pathname = usePathname();
  const isLanding = primaryNav.some((item) => item.href === pathname);

  // On a service landing page, the footer's second column becomes "Related
  // care" — the sibling service pages plus an FAQ anchor, matching the
  // reference exactly (no Instagram/YouTube row there either). The homepage
  // keeps its existing "Explore" column with the full site nav + socials.
  const relatedCare = primaryNav.filter((item) => item.href !== pathname);

  // The homepage and the four landing pages come from two distinct
  // reference stylesheets whose `.footer-grid` collapses to two columns at
  // different widths (home: 1000px, landing: 1050px) — genuinely different
  // design systems, not a shared component quirk, so the breakpoint (and
  // the exact wide-mode column ratio) has to branch on route too. Class
  // names are written out in full (not built from interpolated fragments)
  // so Tailwind's static scanner can see and generate both variants.
  const gridClassName = isLanding
    ? "grid gap-8 pb-12 bp620:grid-cols-2 bp620:gap-[42px] bp1050:grid-cols-[1.2fr_0.7fr_1fr] bp1050:gap-[70px]"
    : "grid gap-8 pb-12 bp620:grid-cols-2 bp620:gap-[42px] bp1000:grid-cols-[1.25fr_0.7fr_1fr] bp1000:gap-[70px]";
  const brandColClassName = isLanding ? "bp620:col-span-2 bp1050:col-span-1" : "bp620:col-span-2 bp1000:col-span-1";

  return (
    <footer data-od-id="footer" className="bg-ink py-16 text-white">
      <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
        <div className={gridClassName}>
          <div className={brandColClassName}>
            <Link href="/" className="mb-4 inline-flex items-center">
              <span className="relative block aspect-[1439/702] h-10 overflow-hidden rounded-xl bg-rose px-3 py-2">
                <Image
                  src="/images/brand/birthwave-logo-white-trimmed.png"
                  alt={siteConfig.name}
                  fill
                  sizes="140px"
                  className="object-contain"
                />
              </span>
            </Link>
            <p className="max-w-[300px] text-sm text-white/65">{siteConfig.description}</p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-[0.14em] text-blush uppercase">
              {isLanding ? "Related care" : "Explore"}
            </h3>
            <div className="grid gap-2 text-sm text-white/70">
              {isLanding
                ? relatedCare.map((item) => (
                    <Link key={item.href} href={item.href} className="hover:text-white">
                      {item.label}
                    </Link>
                  ))
                : footerNav.map((item) => (
                    <Link key={item.href} href={item.href} className="hover:text-white">
                      {item.label}
                    </Link>
                  ))}
              {isLanding && (
                <a href="#faq" className="hover:text-white">
                  FAQs
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-[0.14em] text-blush uppercase">
              Visit the clinic
            </h3>
            <p className="max-w-[300px] text-sm text-white/70">
              {siteConfig.legalName}
              <br />
              {siteConfig.address.full}
            </p>
            <a href={siteConfig.phoneHref} className="mt-3 block text-sm text-white/70 hover:text-white">
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-1 block text-sm text-white/70 hover:text-white"
            >
              WhatsApp Birthwave
            </a>
            {!isLanding && (
              <div className="mt-4 flex gap-4 text-sm text-white/70">
                <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="hover:text-white">
                  Instagram
                </a>
                <a href={siteConfig.social.youtube} target="_blank" rel="noreferrer" className="hover:text-white">
                  YouTube
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/15 pt-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The Birthwave. Information shown is for general education and does not replace an individual medical consultation.</p>
        </div>
      </div>
    </footer>
  );
}
