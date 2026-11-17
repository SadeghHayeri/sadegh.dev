import { intro, site } from "@/content/site";
import s from "./Hero.module.css";

export function Hero() {
  return (
    <section className={s.hero} id="top" aria-labelledby="name">
      <div className="wrap">
        <div className={s.lockup}>
          <h1 className={s.name} id="name">
            {site.name}
          </h1>
          <p className={s.statement}>
            {site.statement.map((line) => (
              <span key={line}>{line} </span>
            ))}
          </p>
        </div>

        <div className={`split ${s.intro}`}>
          <p className={s.place}>{site.location}</p>
          <div className={s.body}>
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
          </div>
        </div>
      </div>
    </section>
  );
}
