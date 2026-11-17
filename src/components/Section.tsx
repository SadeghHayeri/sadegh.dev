import type { ReactNode } from "react";
import s from "./Section.module.css";

/** A page section: its title in the left rail, its content on the right. */
export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={s.section} aria-labelledby={`${id}-title`}>
      <div className={`wrap split ${s.grid}`}>
        <h2 className={s.title} id={`${id}-title`}>
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
