"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Applies the per-page palette from the design handoff's `.page-*` scoping
 * (globals.css) to the whole chrome — header, hero, sections, footer — so a
 * landing page tints consistently, matching the reference. The homepage and
 * any unmapped route get no class, i.e. the default (unthemed) tokens, so
 * this can wrap the whole app without touching `/`.
 */
const THEME_BY_PATH: Record<string, string> = {
  "/natural-birth": "theme-natural-birth",
  "/normal-vaginal-delivery": "theme-normal-vaginal-delivery",
  "/vbac-consultation": "theme-vbac",
};

export function ThemeScope({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const theme = THEME_BY_PATH[pathname] ?? "";
  return <div className={`flex min-h-full flex-col ${theme}`}>{children}</div>;
}
