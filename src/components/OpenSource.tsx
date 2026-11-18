import { projects } from "@/content/site";
import { Section } from "./Section";
import s from "./OpenSource.module.css";

export function OpenSource() {
  return (
    <Section id="open-source" title="Open source">
      <ul className={s.list}>
        {projects.map((project) => (
          <li key={project.name} className={s.item}>
            <h3 className={s.name}>
              <a className="link" href={project.href} target="_blank" rel="noopener">
                {project.name}
              </a>
            </h3>
            <p className={s.text}>{project.description}</p>
            <p className={s.meta}>{project.meta}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
