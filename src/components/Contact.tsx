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
          <a className="link" href={site.github} rel="me">
            GitHub
          </a>
        </li>
        <li>
          <a className="link" href={site.linkedin} rel="me">
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
