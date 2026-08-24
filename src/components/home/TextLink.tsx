import type { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

/** The reference's `.text-link`: 14px semibold with an arrow that nudges on hover. */
export function TextLink({
  href,
  children,
  className = "",
  ...rest
}: { href: string; children: ReactNode; className?: string } & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
>) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-sm font-semibold text-od-ink ${className}`}
      {...rest}
    >
      {children}
      <span aria-hidden className="text-lg transition-transform duration-250 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
