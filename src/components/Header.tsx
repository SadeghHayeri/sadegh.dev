import { nav, site } from "@/content/site";
import { Mark } from "./Mark";
import s from "./Header.module.css";

export function Header() {
  return (
    <header className={s.header}>
      <div className={`wrap ${s.bar}`}>
        <a className={s.home} href="#top" aria-label={`${site.name}, top of page`}>
          <Mark />
        </a>
        <nav aria-label="Sections">
          <ul className={s.nav}>
            {nav.map((item) => (
              <li key={item.href}>
                <a className={s.item} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
