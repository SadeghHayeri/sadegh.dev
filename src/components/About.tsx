import { about } from "@/content/site";
import { Section } from "./Section";
import s from "./About.module.css";

export function About() {
  const [first, ...rest] = about.paragraphs;
  return (
    <Section id="about" title="About">
      <div className={s.prose}>
        <p className={s.lede}>{first}</p>
        {rest.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <dl className={s.toolbox}>
        {about.toolbox.map((group) => (
          <div className={s.group} key={group.label}>
            <dt>{group.label}</dt>
            <dd>{group.items}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
