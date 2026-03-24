export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demo?: string;
  github?: string;
  projectLink?: string;
}

/** Order and copy aligned with resume (FlowCV, Mar 2026); extras below are additional shipped work. */
export const projects: Project[] = [
  {
    title: "Profx",
    description:
      "Production live site at profx.com — scalable architecture, responsive layout, and performance tuning. Worked with stakeholders to ship a robust, user-focused platform.",
    image: "/Images/profx.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "API integrations"],
    demo: "https://profx.com/",
  },
  {
    title: "ApplyTrack — Job application tracker",
    description:
      "Dashboard, Kanban board, and analytics with filters, sorting, and CSV export. Detail view with timeline, notes, and tags; responsive UI, dark/light theme, and accessible add/edit modals. Chrome extension (Manifest V3) to capture listings; Node.js, Express, and PostgreSQL for the API and data.",
    image: "/Images/ApplyTrack.png",
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "shadcn",
      "React Router",
      "@dnd-kit",
      "Recharts",
      "PostgreSQL",
      "Node.js",
      "Express",
    ],
    demo: "https://applytrack-vert.vercel.app/kanban",
  },
  {
    title: "Yoi — Insurance aggregator (ADB)",
    description:
      "Freelance build for Asuransi Digital Bersama (ADB), Indonesia: responsive insurtech app focused on insurance aggregation workflows, compliance, and solid web performance.",
    image: "/Images/yoi.png",
    tech: ["React", "TypeScript", "SWR", "Tailwind CSS"],
    projectLink: "https://adbinsure.com/yoi",
  },
  {
    title: "VidIn — Video library",
    description:
      "Feature-rich video experience with authentication, playlists, watch history, and search — emphasis on reusable UI and clear usability.",
    image: "/Images/vidin.png",
    tech: ["React", "React Router", "Tailwind CSS"],
    github: "https://github.com/RaviPratihast/vidin",
    demo: "https://vidin.netlify.app/",
  },
  // {
  //   title: "Fwiggy — Food delivery web app",
  //   description:
  //     "End-to-end food ordering UI with cart flows and responsive layout.",
  //   image:
  //     "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1981&q=80",
  //   tech: [
  //     "React",
  //     "Redux",
  //     "React Router",
  //     "Firebase",
  //     "Tailwind CSS",
  //     "Lucide",
  //   ],
  //   github: "https://github.com/RaviPratihast/fwiggy",
  //   // demo: "https://fwiggyforfood.netlify.app/",
  // },
  {
    title: "Kartshop — E-commerce storefront",
    description:
      "Multi-category storefront patterns: catalog browsing, product detail, and checkout-oriented UI.",
    image: "/Images/ecommerce.png",
    tech: ["React", "React Router", "Tailwind CSS"],
    github: "https://github.com/RaviPratihast/ecom-kartshop",
    demo: "https://kartshop-ecom.netlify.app/",
  },
  {
    title: "Personal Note — Basic notes web app",
    description:
      "A minimal notes app inspired by Google Keep to quickly capture ideas and important reminders.",
    image: "/Images/todoapp.png",
    tech: ["ReactJS", "React Router", "Flexbox layout", "TailwindCSS"],
    github: "https://github.com/RaviPratihast/my-todo-app-using-React",
    demo: "https://personalnoteapp.netlify.app/",
  },
];
