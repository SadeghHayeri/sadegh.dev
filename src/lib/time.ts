/** Small date helpers for the work timeline. Months are "YYYY-MM" strings. */

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/** "2023-03" → 2023.1667 (years, with the month as a fraction). */
export function toYears(month: string): number {
  const [y, m] = month.split("-").map(Number);
  return y + (m - 1) / 12;
}

/** "2023-03" → "Mar 2023" */
export function formatMonth(month: string): string {
  const [y, m] = month.split("-").map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

/** Length of a span in whole months → "3 yr 8 mo" */
export function formatDuration(startYears: number, endYears: number): string {
  const months = Math.max(1, Math.round((endYears - startYears) * 12));
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y ? `${y} yr` : "", m ? `${m} mo` : ""].filter(Boolean).join(" ");
}
