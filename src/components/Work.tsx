import type { CSSProperties } from "react";
import { roles } from "@/content/site";
import { formatDuration, formatSpan, toYears } from "@/lib/time";
import s from "./Work.module.css";

/**
 * Work history as a timeline: one bar per role on a shared axis of years,
 * ending today (the day the site was built). Plain HTML and CSS, so it
 * shows the same with or without scripts. Each row opens for the details.
 */
export function Work() {
  const today = new Date();
  const now =
    today.getFullYear() + (today.getMonth() + (today.getDate() - 1) / 31) / 12;

  const first = Math.floor(Math.min(...roles.map((r) => toYears(r.start))));
  const length = now - first;
  const at = (t: number) => (t - first) / length;

  // One tick per year, as long as its label still fits before the right edge.
  const ticks = [];
  for (let year = first; at(year) < 0.925; year++) {
    ticks.push({
      year,
      at: at(year),
      // Narrow screens label every other year, and need more room at the edge.
      alternate: (year - first) % 2 === 1,
      tight: at(year) > 0.86,
    });
  }

  const rows = roles.map((role) => {
    const start = toYears(role.start);
    // A role that ended in October ran until the end of October.
    const end = role.end ? toYears(role.end) + 1 / 12 : now;
    return {
      ...role,
      when: formatSpan(role.start, role.end),
      duration: formatDuration(start, end),
      from: at(start),
      to: at(end),
    };
  });

  return (
    <section id="work" className={s.section} aria-labelledby="work-title">
      <div className="wrap">
        <div className={`split ${s.head}`}>
          <h2 className={s.title} id="work-title">
            Work
          </h2>
          <div className={s.axis} aria-hidden="true">
            {ticks.map((tick) => (
              <span
                key={tick.year}
                className={s.tick}
                data-alternate={tick.alternate ? "" : undefined}
                data-tight={tick.tight ? "" : undefined}
                style={{ "--at": tick.at } as CSSProperties}
              >
                {tick.year}
              </span>
            ))}
          </div>
        </div>

        {rows.map((row) => (
          <details
            key={row.id}
            className={s.row}
            data-live={row.end === null ? "" : undefined}
            style={{ "--from": row.from, "--to": row.to } as CSSProperties}
          >
            <summary className={s.summary}>
              <h3 className={s.who}>
                <span className={s.company}>{row.company}</span>
                <span className="sr-only">, </span>
                <span className={s.role}>{row.title}</span>
              </h3>
              <span className={s.toggle} aria-hidden="true" />
              <span className={s.track}>
                <span className={s.lane}>
                  <span className={s.bar} />
                </span>
                <span
                  className={s.when}
                  data-side={row.to > 0.62 ? "left" : "right"}
                >
                  {row.when}
                </span>
              </span>
            </summary>

            <div className={`split ${s.panel}`}>
              <div className={s.facts}>
                <p>{row.location}</p>
                <p>{row.duration}</p>
                <p className={s.stack}>{row.stack.join(", ")}</p>
              </div>
              <div className={s.detail}>
                <p className={s.about}>
                  {row.summary} {row.scale}.
                </p>
                <ul className={s.points}>
                  {row.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
