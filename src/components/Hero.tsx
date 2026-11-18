import { intro, site } from "@/content/site";
import s from "./Hero.module.css";

export function Hero() {
  return (
    <section className={s.hero} id="top" aria-labelledby="name">
      <div className={`wrap ${s.grid}`}>
        <div>
          <h1 className={s.name} id="name">
            {site.name}
          </h1>
          <p className={s.lede}>
            {intro.map((part, i) =>
              typeof part === "string" ? (
                part
              ) : (
                <a key={i} className="link" href={part.href}>
                  {part.text}
                </a>
              ),
            )}
          </p>
          <ul className={s.links}>
            <li>
              <a className="link" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <a
                className="link"
                href={site.github}
                target="_blank"
                rel="me noopener"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="link"
                href={site.linkedin}
                target="_blank"
                rel="me noopener"
              >
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
        </div>

        {/* A plain <img>: `next/image` is a client component, and this page
            ships none. The stylesheet sets the size, so nothing shifts as
            the file loads. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={s.photo}
          src={site.photo.src}
          alt={site.photo.alt}
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </section>
  );
}
