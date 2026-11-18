/* The drawing, on a 64 grid. The face sits on x 16 to 48 and the features on
   multiples of 4, so they land on whole pixels at 16px and at 32px.
   `src/app/icon.svg` is a copy of these paths with the colours written out. */

/** The hair, as one silhouette. */
const HAIR =
  "M15.4 56.6C13.6 53 9.6 50 9.5 45.6C8.3 47.1 6.8 47.9 5.4 47.6C7.6 45.2 8 37.9 4.8 33.1C7.8 33.1 10.2 31.1 10.2 27.7C6.3 23.8 7.8 15.6 14.5 13.6C15.5 7.8 22.3 3 30.1 4C35.4 4.6 40.7 5.4 43.2 7.8C39.8 7.3 36.8 10.3 37.3 15.1C40.2 12.2 48 10.3 52.4 15.1C56.2 14.7 58.4 19.5 59.2 25.3C57.6 23.8 56.5 24.8 56.2 28.2C59.5 32.6 59.2 40.3 57.5 45.6C56.5 44.8 55.5 44.4 54.3 44.7C54.4 49.5 50.6 52.6 48.8 55.8C48 54 47.7 52 47.8 50.6L44 46L20 46L16.3 50.6C16.4 52 16.4 54.5 15.4 56.6Z";

/** The face, then the gaps between locks of hair, where the paper shows. */
const FACE =
  "M16 45.2C16 42.7 16.3 40.3 17.5 37.9C20.4 38.2 24.7 36 26.7 32.1C26.9 33.3 27.5 34.4 28.6 35C33.5 35.1 38.8 32.1 40.7 27.2C44.1 28.2 47 31.6 48 36L48 45.2C48 53.9 38.8 60 32 60C25.2 60 16 53.9 16 45.2ZM18.9 12.2Q25.7 5.4 37.3 7.9Q27.6 8.7 18.9 12.2ZM26.5 31.8Q34.4 31.6 38.8 23.3Q35.2 28.3 26.5 31.8ZM11 26.3Q11.2 18 19.9 15.1Q14.1 19.5 11 26.3ZM47.5 18Q54.5 18.5 56.1 26.3Q52.8 21.4 47.5 18ZM9.6 42.8Q13.1 40.3 13.2 34.5Q10.5 39 9.6 42.8ZM54.6 43.4Q51.2 40.8 52 34Q54.1 39.3 54.6 43.4ZM38.3 16.1Q43.6 12.4 49.9 15.7Q43.8 16.1 38.3 16.1Z";

/** The jaw line. Both ends are tucked under the hair. */
const JAW =
  "M17 34L17.5 37.9C16.3 40.3 16 42.7 16 45.2C16 53.9 25.2 60 32 60C38.8 60 48 53.9 48 45.2L48 36L48.4 32";

const EYES = "M20.9 42Q24 37.8 27.1 42M36.9 42Q40 37.8 43.1 42";

/** Stubble. Each `h.01` is one dot, drawn by the round line cap. */
const STUBBLE =
  "M27.5 45.2h.01M29.4 45.1h.01M31.1 45.1h.01M32.5 45.2h.01M34.4 45h.01M18.2 46.4h.01M25.3 46.2h.01M26.6 46.4h.01M28.4 46.5h.01M30.1 46.3h.01M32 46.5h.01M33.7 46.4h.01M35.4 46.4h.01M37 46.3h.01M38.7 46.6h.01M45.4 46.6h.01M19 48.1h.01M20.8 48.1h.01M22.7 47.9h.01M27.7 47.7h.01M29.4 47.8h.01M31.1 48.1h.01M32.6 47.8h.01M34.2 48h.01M41.4 48h.01M43.1 48.1h.01M44.5 48.1h.01M18.4 49.4h.01M19.8 49.5h.01M21.6 49.4h.01M23.4 49.6h.01M40.5 49.1h.01M41.9 49.5h.01M43.5 49.1h.01M45.7 49.2h.01M19.3 50.9h.01M20.7 50.8h.01M22.3 50.8h.01M41.2 50.6h.01M42.9 50.8h.01M44.7 50.7h.01M21.4 52.4h.01M23.5 52.5h.01M40.3 52.3h.01M42.1 52.2h.01M43.6 52.3h.01M22.5 54h.01M24.3 53.8h.01M39.3 53.9h.01M41.3 53.6h.01M42.6 53.8h.01M23.4 55.4h.01M25.1 55.3h.01M38.8 55.3h.01M40.5 55.1h.01M26 56.7h.01M27.7 56.7h.01M29.4 56.6h.01M32.6 56.9h.01M34.2 56.6h.01M35.9 56.6h.01M38 56.9h.01M31.8 58.3h.01M33.3 58.2h.01";

const MOUTH = "M25.4 48.7Q32 50.9 38.6 48.7Q38.9 55.4 32 55.4Q25.1 55.4 25.4 48.7Z";

const TEETH = "M26 49.3Q32 51.4 38 49.3L38.1 50.9Q32 53.2 25.9 50.9Z";

/** The site's mark: a portrait, pen on paper. `.mark` in globals.css sets the two colours. */
export function Mark({ size = 32 }: { size?: number }) {
  return (
    <svg
      className="mark"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="64" height="64" rx="14" fill="var(--paper)" />
      <path
        d={HAIR}
        fill="var(--pen)"
        stroke="var(--pen)"
        strokeLinejoin="round"
      />
      <path d={FACE} fill="var(--paper)" />
      <g
        fill="none"
        stroke="var(--pen)"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={JAW} strokeWidth="1.8" />
        <path d={EYES} strokeWidth="2.6" />
        <path d={STUBBLE} strokeWidth="0.62" />
      </g>
      <path
        d={MOUTH}
        fill="var(--pen)"
        stroke="var(--pen)"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d={TEETH} fill="var(--paper)" />
    </svg>
  );
}
