import { useMemo } from "react";
import {
  SiCss3,
  SiDirectus,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPayloadcms,
  SiPostgresql,
  SiReact,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { useTheme } from "../../context/ThemeContext";
import LogoLoop, { type LogoNodeItem } from "../ui/LogoLoop";

const iconCls = "shrink-0 transition-[filter] hover:brightness-110";
const toolChipCls =
  "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium border border-gray-300/70 dark:border-gray-600/70 bg-white/90 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200";

/** Brand colors on icons (fill uses currentColor). Black marks invert in dark mode for contrast. */
function buildTechLogos(isDark: boolean): LogoNodeItem[] {
  const mono = isDark ? "#f5f5f5" : "#0a0a0a";

  const entries: Omit<LogoNodeItem, "ariaLabel">[] = [
    { node: <SiReact className={iconCls} style={{ color: "#61dafb" }} />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs className={iconCls} style={{ color: mono }} />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiJavascript className={iconCls} style={{ color: "#f7df1e" }} />,
      title: "JavaScript",
      href: "https://developer.mozilla.org/docs/Web/JavaScript",
    },
    { node: <SiHtml5 className={iconCls} style={{ color: "#e34f26" }} />, title: "HTML", href: "https://developer.mozilla.org/docs/Web/HTML" },
    { node: <SiCss3 className={iconCls} style={{ color: "#1572b6" }} />, title: "CSS", href: "https://developer.mozilla.org/docs/Web/CSS" },
    {
      node: <SiTailwindcss className={iconCls} style={{ color: "#06b6d4" }} />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    { node: <SiGit className={iconCls} style={{ color: "#f05032" }} />, title: "Git", href: "https://git-scm.com" },
    {
      node: <SiTypescript className={iconCls} style={{ color: "#3178c6" }} />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiPostgresql className={iconCls} style={{ color: "#4169e1" }} />,
      title: "PostgreSQL",
      href: "https://www.postgresql.org",
    },
    {
      node: <SiPayloadcms className={iconCls} style={{ color: mono }} />,
      title: "Payload CMS",
      href: "https://payloadcms.com",
    },
    { node: <SiDirectus className={iconCls} style={{ color: "#6644ff" }} />, title: "Directus", href: "https://directus.io" },
    { node: <SiStrapi className={iconCls} style={{ color: "#4945e5" }} />, title: "Strapi", href: "https://strapi.io" },
  ];

  return entries.map((entry) => ({
    ...entry,
    ariaLabel: `${entry.title} (opens in a new tab)`,
  }));
}

function buildAgenticTools(): LogoNodeItem[] {
  const tools: Omit<LogoNodeItem, "ariaLabel">[] = [
    {
      title: "Claude Code",
      href: "https://www.anthropic.com/claude-code",
      node: <span className={toolChipCls}>Claude Code</span>,
    },
    {
      title: "Cursor",
      href: "https://www.cursor.com",
      node: <span className={toolChipCls}>Cursor</span>,
    },
    {
      title: "GitHub Copilot",
      href: "https://github.com/features/copilot",
      node: <span className={toolChipCls}>GitHub Copilot</span>,
    },
    {
      title: "Codex",
      href: "https://openai.com/index/introducing-codex/",
      node: <span className={toolChipCls}>Codex</span>,
    },
    {
      title: "Paper",
      href: "https://paper.design",
      node: <span className={toolChipCls}>Paper</span>,
    },
    {
      title: "MCP Servers",
      href: "https://modelcontextprotocol.io",
      node: <span className={toolChipCls}>MCP Servers</span>,
    },
    {
      title: "Agentic Workflows",
      node: <span className={toolChipCls}>Agentic Workflows</span>,
    },
  ];

  return tools.map((tool) => ({
    ...tool,
    ariaLabel: tool.href
      ? `${tool.title} (opens in a new tab)`
      : `${tool.title} skill`,
  }));
}

export function Skills() {
  const { theme } = useTheme();
  const techLogos = useMemo(() => buildTechLogos(theme === "dark"), [theme]);
  const agenticTools = useMemo(() => buildAgenticTools(), []);

  return (
    <section id="skills" className="section-skills-home py-16 bg-white dark:bg-gray-900">
      <div className="section-skills-home-inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="skills-home-intro text-center">
          <h2 className="skills-home-title text-3xl font-extrabold text-gray-900 dark:text-white">Skills &amp; expertise</h2>
          <p className="skills-home-subtitle mt-4 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
            Stacks I work with in production codebases  "hover to pause, click a logo for documentation".
          </p>
        </div>

        <div
          className="skills-home-marquee mt-12 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 px-2 py-10 sm:px-6"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <LogoLoop
            className="skills-home-logoloop"
            logos={techLogos}
            speed={75}
            direction="left"
            logoHeight={44}
            gap={52}
            pauseOnHover
            scaleOnHover
            ariaLabel="Technologies and stacks I use"
          />
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
            Expertise in AI tools
          </h3>
          <p className="mt-2 max-w-2xl mx-auto text-sm sm:text-base text-gray-500 dark:text-gray-400">
            I leverage AI tools to create faster, ship smarter, and scale
            agentic workflows across real projects.
          </p>
        </div>

        <div
          className="skills-home-marquee-tools mt-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 px-2 py-5 sm:px-6"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <LogoLoop
            className="skills-home-logoloop-tools"
            logos={agenticTools}
            speed={70}
            direction="left"
            logoHeight={24}
            gap={22}
            pauseOnHover
            ariaLabel="AI and agentic tools exposure"
          />
        </div>
      </div>
    </section>
  );
}
