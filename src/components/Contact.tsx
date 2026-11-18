import { site } from "@/content/site";
import { Section } from "./Section";
import s from "./Contact.module.css";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className={s.note}>{site.contact}</p>
      <a className={s.email} href={`mailto:${site.email}`}>
        {site.email}
      </a>
      <ul className={s.links}>
        <li>
          <a className="link" href={site.github} target="_blank" rel="me noopener">
            GitHub
          </a>
        </li>
        <li>
          <a className="link" href={site.linkedin} target="_blank" rel="me noopener">
            LinkedIn
          </a>
        </li>
        {site.resume ? (
          <li>
            <a className="link" href={site.resume} download>
              Résumé (PDF)
            </a>
          </li>
        ) : null}
      </ul>
    </Section>
  );
}
