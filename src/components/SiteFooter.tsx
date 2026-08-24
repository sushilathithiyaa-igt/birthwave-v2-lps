import Image from "next/image";
import Link from "next/link";
import { footerNav, siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer data-od-id="footer" className="bg-ink py-16 text-white">
      <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-12">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_1fr] lg:gap-16">
          <div className="sm:col-span-2 lg:col-span-1">
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
