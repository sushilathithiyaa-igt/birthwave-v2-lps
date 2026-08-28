/** The handoff's responsive contract (DESIGN-MANIFEST.json → responsiveViewports).
 *  Pure data module — safe to import from any fidelity script without
 *  triggering side effects (unlike importing fidelity.mjs itself, which runs
 *  a full capture on load). */
export const VIEWPORTS = [
  { name: "360x800", width: 360, height: 800 },
  { name: "390x844", width: 390, height: 844 },
  { name: "430x932", width: 430, height: 932 },
  { name: "600x960", width: 600, height: 960 },
  { name: "820x1180", width: 820, height: 1180 },
  { name: "1024x768", width: 1024, height: 768 },
  { name: "1366x768", width: 1366, height: 768 },
  { name: "1440x900", width: 1440, height: 900 },
  { name: "1920x1080", width: 1920, height: 1080 },
];
