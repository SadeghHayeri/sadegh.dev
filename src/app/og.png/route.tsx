import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { roles, site } from "@/content/site";
import { toYears } from "@/lib/time";

/**
 * The image shown when the site is shared (Open Graph / Twitter card).
 * Rendered once at build time and written to `out/og.png`.
 */
export const dynamic = "force-static";

const INK = "#ecebe6";
const GREY = "#7c7a75";
const IDLE = "#3b3a37";
const LIVE = "#4fd9c6";

const font = (weight: 400 | 500) =>
  readFile(
    join(
      process.cwd(),
      "node_modules/@fontsource/funnel-display/files",
      `funnel-display-latin-${weight}-normal.woff`,
    ),
  );

export async function GET() {
  const [regular, medium] = await Promise.all([font(400), font(500)]);

  // The same timeline as the Work section, reduced to its spans.
  const today = new Date();
  const now = today.getFullYear() + today.getMonth() / 12;
  const first = Math.floor(Math.min(...roles.map((r) => toYears(r.start))));
  const length = now - first;
  const spans = roles.map((role, i) => {
    const start = toYears(role.start);
    const end = role.end ? toYears(role.end) + 1 / 12 : now;
    return {
      id: role.id,
      left: `${((start - first) / length) * 100}%`,
      width: `${((end - start) / length) * 100}%`,
      top: i * 30,
      color: role.end ? IDLE : LIVE,
    };
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "76px 84px 84px",
          background: "#000",
          fontFamily: "Funnel Display",
          fontSize: 58,
          lineHeight: 1.1,
          letterSpacing: "-0.035em",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: INK }}>{site.name}</div>
          <div style={{ display: "flex", flexDirection: "column", color: GREY }}>
            {site.statement.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            height: (spans.length - 1) * 30 + 12,
          }}
        >
          {spans.map((span) => (
            <div
              key={span.id}
              style={{
                position: "absolute",
                left: span.left,
                top: span.top,
                width: span.width,
                height: 12,
                borderRadius: 3,
                background: span.color,
              }}
            />
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Funnel Display", data: regular, weight: 400, style: "normal" },
        { name: "Funnel Display", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
