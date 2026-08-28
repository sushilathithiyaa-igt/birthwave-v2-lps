"use client";

import { ButtonEl } from "@/components/Button";
import { useBookingSheet, type BookingConfig } from "@/components/BookingSheet";

/** A button styled like `Button` that opens the booking sheet instead of
 * navigating — matches the reference's `data-book` triggers (hero CTA,
 * quick-actions rail, mobile action bar). */
export function BookTrigger({
  config,
  children,
  variant = "primary",
  className = "",
  withArrow = true,
  ...rest
}: {
  config: BookingConfig;
} & Omit<React.ComponentProps<typeof ButtonEl>, "onClick">) {
  const { open } = useBookingSheet();
  return (
    <ButtonEl
      type="button"
      variant={variant}
      className={className}
      withArrow={withArrow}
      onClick={() => open(config)}
      {...rest}
    >
      {children}
    </ButtonEl>
  );
}
