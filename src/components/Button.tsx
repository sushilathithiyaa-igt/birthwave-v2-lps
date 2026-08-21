import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "light" | "outline" | "outline-dark";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-rose text-white shadow-[0_10px_24px_-6px_rgba(202,149,133,0.55)] hover:bg-deep",
  light: "bg-white text-deep hover:bg-blush-light",
  outline:
    "border border-ink/12 bg-white/50 text-ink hover:border-rose hover:bg-white",
  "outline-dark":
    "border border-white/30 bg-transparent text-white hover:bg-white/10",
};

const base =
  "inline-flex min-h-[3rem] items-center justify-center gap-2.5 rounded-full px-6 text-sm font-semibold transition-all duration-250 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline focus-visible:outline-3 focus-visible:outline-coral focus-visible:outline-offset-4";

function Arrow() {
  return (
    <span aria-hidden className="transition-transform duration-250 group-hover:translate-x-1">
      →
    </span>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  withArrow = true,
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={href} className={`group ${base} ${variantClasses[variant]} ${className}`} {...rest}>
      {children}
      {withArrow && <Arrow />}
    </a>
  );
}

export function ButtonEl({
  children,
  variant = "primary",
  className = "",
  withArrow = false,
  ...rest
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`group ${base} ${variantClasses[variant]} ${className}`} {...rest}>
      {children}
      {withArrow && <Arrow />}
    </button>
  );
}
