import { agents, site } from "@/content/site";
import { Section } from "./Section";
import s from "./Agents.module.css";

/** Points AI agents, and anyone else, to the Markdown copy of the site. */
export function Agents() {
  const file = new URL(agents.href, site.url);
  return (
    <Section id="agents" title="For agents">
      <p className={s.note}>{agents.note}</p>
      {/* A plain anchor: the target is a file, not a page to navigate to. */}
      <a
        className={`link ${s.file}`}
        href={agents.href}
        target="_blank"
        rel="alternate"
        type="text/markdown"
      >
        {file.host}
        {file.pathname}
      </a>
    </Section>
  );
}
