/**
 * Everything the site says lives in this file.
 * Edit the text here; the layout picks it up on the next build.
 */

export const site = {
  /** Where the site lives. Used for canonical links, the sitemap and the share image. */
  url: "https://sadegh.dev",
  name: "Sadegh Hayeri",
  title: "Sadegh Hayeri, senior software engineer",
  description:
    "Sadegh Hayeri is a senior software engineer focused on backend systems, cloud infrastructure and site reliability.",
  /** Set in large type under the name, one sentence to a line. */
  statement: ["Senior software engineer.", "Backend, infrastructure, reliability."],
  location: "Toronto, Canada",
  /** Forwarded to my inbox by Cloudflare Email Routing. */
  email: "hello@sadegh.dev",
  github: "https://github.com/SadeghHayeri",
  linkedin: "https://www.linkedin.com/in/sadeghhayeri",
  /**
   * To offer a résumé download, put the PDF in `public/` and set its path
   * here, e.g. "/Sadegh_Hayeri_Resume.pdf". Leave as null to hide the link.
   */
  resume: null as string | null,
  /** The sentence above the email address in Contact. */
  contact:
    "I'm interested in senior software engineering, backend and SRE work involving challenging production systems. If my background seems relevant to your team, I'd be happy to hear from you.",
};

/** The paragraph under the headline. Plain strings, or links to a section. */
export const intro: (string | { text: string; href: string })[] = [
  "I have 7+ years of experience across real-time dispatch, high-traffic platforms, public-cloud compute and financial transaction systems. I enjoy understanding how systems behave in production, making difficult changes safely, and improving the tools other engineers depend on.",
];

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#open-source", label: "Open source" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export type Role = {
  id: string;
  company: string;
  title: string;
  /** "YYYY-MM" */
  start: string;
  /** "YYYY-MM", or null while the role is current */
  end: string | null;
  location: string;
  summary: string;
  scale: string;
  highlights: string[];
  stack: string[];
};

/** Most recent first. */
export const roles: Role[] = [
  {
    id: "swapwallet",
    company: "SwapWallet",
    title: "Founder & CEO",
    start: "2023-03",
    end: null,
    location: "Tehran, Iran (hybrid)",
    summary:
      "A consumer crypto wallet and exchange on the web, Android and Telegram. Bootstrapped, funded in its second year, now profitable.",
    scale: "500K+ registered users, about 30K transactions a day",
    highlights: [
      "Wrote the first version of the transactional core in Kotlin and Spring Boot and remain its top contributor. Every trade, transfer and balance change goes through it with a full audit trail.",
      "Designed multi-chain custody for deposits, withdrawals and hot and cold wallets, and connected external exchanges for liquidity and treasury hedging.",
      "Run the platform on self-hosted Kubernetes with PostgreSQL, ClickHouse, Kafka and Redis, with network isolation at every layer and monitoring on Prometheus and Grafana.",
      "Hired and lead an 18-person company, and own product, growth and fundraising alongside engineering.",
      "Rebuilt engineering around AI agents: assisted development and automated code review in daily use, with agents connected to production tooling for debugging and operations.",
      "Opened the platform to customers' own AI assistants through a public MCP server, with scoped OAuth access and human approval for every movement of funds.",
    ],
    stack: [
      "Kotlin",
      "Spring Boot",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "ClickHouse",
      "Kafka",
      "Redis",
      "Kubernetes",
    ],
  },
  {
    id: "sotoon",
    company: "Sotoon",
    title: "Senior Software Engineer, Compute",
    start: "2022-06",
    end: "2023-10",
    location: "Tehran, Iran",
    summary: "One of Iran's largest public cloud providers.",
    scale: "3,000+ customer VMs and 35K+ vCPUs across three data centres",
    highlights: [
      "Led the technical migration of the compute platform from a legacy in-house VM orchestrator to OpenStack (OpenStack-Helm on Kubernetes, OVN), writing Kubernetes controllers that kept the existing API working while VMs moved across.",
      "Moved Open vSwitch on every production hypervisor from Kubernetes DaemonSets to systemd with no customer-facing downtime, cutting the switchover on each node from minutes to under three seconds.",
      "Automated bare-metal provisioning with Ansible and Kubespray, from OS install and tuning to joining the cluster, so a new node is production-ready in under an hour with no manual steps.",
    ],
    stack: [
      "Go",
      "Kubernetes",
      "OpenStack",
      "QEMU/KVM",
      "Open vSwitch",
      "OVN",
      "Ansible",
      "Helm",
    ],
  },
  {
    id: "yektanet",
    company: "Yektanet",
    title: "Tech Lead, Infrastructure",
    start: "2020-07",
    end: "2022-06",
    location: "Tehran, Iran",
    summary: "Iran's largest native advertising network.",
    scale: "About 5B ad impressions a month, 30K requests a second",
    highlights: [
      "Joined as an SRE, one of the first two infrastructure engineers, and set the team's technical direction as it grew to six.",
      "Moved 30+ engineering teams from hand-managed servers and manual deploys to a shared Kubernetes platform within a year, with delivery standardized on GitLab CI and canary releases in Spinnaker.",
      "Built company-wide monitoring and alerting on Prometheus and Grafana, and point-in-time recovery for 20+ production PostgreSQL databases. That work became pgkit.",
      "Ran the Kafka, RabbitMQ and Redis clusters behind ad serving, and built Kafka Connect and Spark pipelines that gave data scientists direct access to production events.",
    ],
    stack: [
      "Kubernetes",
      "PostgreSQL",
      "Kafka",
      "RabbitMQ",
      "Redis",
      "Prometheus",
      "Grafana",
      "GitLab CI",
      "Spinnaker",
      "Spark",
    ],
  },
  {
    id: "tapsi",
    company: "Tapsi",
    title: "Software Engineer, Dispatch",
    start: "2019-06",
    end: "2020-06",
    location: "Tehran, Iran",
    summary: "One of Iran's two largest ride-hailing platforms.",
    scale: "25M users, 20K+ driver location updates a second",
    highlights: [
      "Built Node.js services for real-time driver location updates and rider–driver matching.",
      "Helped redesign geospatial matching, replacing Redis GEO and custom sharding with H3 hexagonal indexing.",
      "Helped launch shared rides, and put machine-learning models for ride-acceptance prediction and ETA correction into production.",
    ],
    stack: ["Node.js", "Python", "Redis", "MongoDB", "PostgreSQL"],
  },
];

export type Project = {
  name: string;
  href: string;
  description: string;
  /** My part in it, plus a few words if there is something worth adding. */
  meta: string;
};

export const projects: Project[] = [
  {
    name: "GreenTunnel",
    href: "https://github.com/SadeghHayeri/GreenTunnel",
    description:
      "An open-source utility for bypassing certain deep packet inspection (DPI) filters without a VPN or a remote server. It splits the start of each connection into pieces, so a filter never sees a hostname it can match. 560K+ downloads since 2019.",
    meta: "Creator, 4.9K stars",
  },
  {
    name: "OpenStack-Helm",
    href: "https://github.com/openstack/openstack-helm",
    description:
      "Helm charts for running OpenStack on Kubernetes. I used them for Sotoon's move to OpenStack and contributed patches upstream.",
    meta: "Contributor",
  },
  {
    name: "pgkit",
    href: "https://github.com/SadeghHayeri/pgkit",
    description:
      "PostgreSQL backup, point-in-time recovery and restore from a single CLI. Built at Yektanet, where it protected 20+ production databases.",
    meta: "Creator",
  },
  {
    name: "Mili",
    href: "https://github.com/SadeghHayeri/Mili",
    description:
      "Automates captive-portal Wi-Fi login on macOS and Linux.",
    meta: "Creator, 200+ stars",
  },
];

export const about = {
  paragraphs: [
    "I started with real-time dispatch at Tapsi, moved into Kubernetes and platform reliability at Yektanet, and then worked on OpenStack migration and compute automation at Sotoon. More recently, I've been responsible for the core backend and infrastructure of SwapWallet, which I founded.",
    "The problems I like best are the ones where the constraints are real: preserving compatibility during a migration, understanding a failure in production, or making a platform easier to operate for the next engineer.",
  ],
  toolbox: [
    {
      label: "Languages",
      items: "Kotlin, Go, TypeScript, Python, Java, SQL",
    },
    {
      label: "Backend and data",
      items:
        "Spring Boot, Node.js, PostgreSQL, ClickHouse, MongoDB, Redis, Kafka, RabbitMQ",
    },
    {
      label: "Infrastructure",
      items:
        "Kubernetes, Helm, Docker, OpenStack, QEMU/KVM, Open vSwitch, Ansible, Prometheus, Grafana",
    },
    {
      label: "Education",
      items: "B.Sc. in Computer Engineering, University of Tehran, 2015 to 2019",
    },
  ],
};
