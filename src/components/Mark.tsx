/** The site's mark: three spans of a timeline, the newest one still running. */
export function Mark({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="11" y="4.5" width="11" height="3" rx="1" fill="var(--live)" />
      <rect x="6" y="10.5" width="9" height="3" rx="1" fill="var(--ink-2)" />
      <rect x="2" y="16.5" width="8" height="3" rx="1" fill="var(--ink-3)" />
    </svg>
  );
}
