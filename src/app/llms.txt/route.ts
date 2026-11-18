import { about, intro, projects, roles, site } from "@/content/site";
import { formatSpan } from "@/lib/time";

/**
 * The whole site as one Markdown file, for AI agents and anything else that
 * reads text rather than pages. `/llms.txt` is where agents look for one.
 * Rendered once at build time and written to `out/llms.txt`.
 *
 * The words come from `site.ts`, so copy edits arrive here on their own.
 * The outline is a hand-kept mirror of the page: a section, field or link
 * added to a component has to be added here as well.
 */
export const dynamic = "force-static";

export function GET() {
  const home = `${site.url}/`;
  const absolute = (href: string) => new URL(href, home).href;
  const list = (items: string[]) => items.map((item) => `- ${item}`).join("\n");

  const blocks = [
    // Hero
    `# ${site.name}`,
    `> ${site.description}`,
    site.statement.join(" "),
    intro
      .map((part) =>
        typeof part === "string"
          ? part
          : `[${part.text}](${absolute(part.href)})`,
      )
      .join(""),
    list([`Location: ${site.location}`, `Website: ${home}`]),

    "## Work",
    ...roles.flatMap((role) => [
      `### ${role.company}`,
      [role.title, formatSpan(role.start, role.end), role.location].join(" · "),
      `${role.summary} ${role.scale}.`,
      list(role.highlights),
      `Stack: ${role.stack.join(", ")}`,
    ]),

    "## Open source",
    ...projects.flatMap((project) => [
      `### ${project.name}`,
      [project.meta, project.href].join(" · "),
      project.description,
    ]),

    "## About",
    ...about.paragraphs,
    list(about.toolbox.map((group) => `${group.label}: ${group.items}`)),

    "## Contact",
    site.contact,
    list([
      `Email: ${site.email}`,
      `GitHub: ${site.github}`,
      `LinkedIn: ${site.linkedin}`,
      ...(site.resume ? [`Résumé (PDF): ${absolute(site.resume)}`] : []),
    ]),
  ];

  return new Response(`${blocks.join("\n\n")}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
