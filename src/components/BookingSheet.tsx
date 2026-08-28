"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { AppointmentForm } from "@/components/AppointmentForm";

export type BookingConfig = {
  heading?: string;
  service: string;
  sourcePage: string;
  submitLabel: string;
  showStageField?: boolean;
  showPreviousCesareanField?: boolean;
};

type BookingSheetContextValue = {
  open: (config: BookingConfig) => void;
  close: () => void;
};

const BookingSheetContext = createContext<BookingSheetContextValue | null>(null);

/** Opens the right-side (desktop) / bottom (mobile) booking sheet, matching
 * the reference's `data-book` behaviour, from anywhere in the tree. */
export function useBookingSheet() {
  const ctx = useContext(BookingSheetContext);
  if (!ctx) throw new Error("useBookingSheet must be used within a BookingSheetProvider");
  return ctx;
}

export function BookingSheetProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<BookingConfig | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const open = useCallback((next: BookingConfig) => {
    triggerRef.current = document.activeElement as HTMLElement | null;
    setConfig(next);
  }, []);

  const close = useCallback(() => {
    setConfig(null);
    triggerRef.current?.focus?.();
  }, []);

  const isOpen = config !== null;

  useEffect(() => {
    if (!isOpen) return;
    document.body.classList.add("sheet-open");
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("sheet-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  return (
    <BookingSheetContext.Provider value={{ open, close }}>
      {children}

      <div
        aria-hidden={!isOpen}
        onClick={close}
        className={`fixed inset-0 z-[60] bg-[rgba(35,22,18,0.35)] transition-opacity duration-300 ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        aria-label={config?.heading ?? "Book an appointment"}
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed inset-x-0 bottom-0 z-[61] max-h-[88dvh] w-full overflow-auto rounded-t-[28px] bg-ivory p-6 shadow-[-20px_0_60px_rgba(44,28,23,0.15)] transition-transform duration-350 ease-out sm:inset-x-auto sm:inset-y-0 sm:right-0 sm:bottom-0 sm:top-0 sm:max-h-none sm:w-[min(470px,100%)] sm:rounded-t-none sm:p-[30px] ${
          isOpen ? "translate-y-0 sm:translate-x-0" : "translate-y-full sm:translate-x-full sm:translate-y-0"
        }`}
        style={{ paddingBottom: "calc(1.5rem + env(safe-area-inset-bottom))" }}
      >
        <div className="mx-auto mb-4 h-1 w-11 rounded-full bg-blush sm:hidden" aria-hidden />
        <div className="mb-6 flex items-start justify-between gap-4">
          <h2 className="max-w-[300px] font-display text-2xl leading-[1.08] font-semibold text-ink">
            Start with a conversation.
          </h2>
          <button
            type="button"
            onClick={close}
            aria-label="Close booking panel"
            className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full border border-ink/12 bg-white text-xl text-ink"
          >
            ×
          </button>
        </div>
        {config && (
          <AppointmentForm
            id="sheet-book"
            heading={config.heading ?? "Request a consultation"}
            service={config.service}
            sourcePage={config.sourcePage}
            submitLabel={config.submitLabel}
            showStageField={config.showStageField}
            showPreviousCesareanField={config.showPreviousCesareanField}
          />
        )}
      </aside>
    </BookingSheetContext.Provider>
  );
}
