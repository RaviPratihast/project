export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demo?: string;
  github?: string;
  projectLink?: string;
}

export const projects: Project[] = [
  {
    title:
      "YOI - (Insurance Aggregator Platform ) of Asuransi Digital Bersama (ADB)",
    description:
      "Built a responsive insurance aggregator web app for the Indonesian insurtech market.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tech: ["React.js", "TypeScript", "SWR", "Tailwind CSS"],
    projectLink: "https://adbinsure.com/yoi",
  },
  {
    title: "Fwiggy - A Food Delivery webApp",
    description: "A Food Delivery App, built with React.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80",
    tech: [
      "ReactJS",
      "Redux",
      "React Router",
      "Firebase",
      "Flexbox layout",
      "TailwindCSS",
      "Lucide Icons",
      "React Icons",
    ],
    github: "https://github.com/RaviPratihast/fwiggy",
    demo: "https://fwiggyforfood.netlify.app/",
  },
  {
    title: "VidIn - A video library App",
    description: "A video library for watching videos, built with React.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80",
    tech: ["ReactJS", "React Router", "Flexbox layout", "TailwindCSS"],
    github: "https://github.com/RaviPratihast/vidin",
    demo: "https://vidin.netlify.app/",
  },
  {
    title: "Kartshop - E-commerce platform",
    description:
      "E-commerce platform, catering to a wide variety of products ranging from clothing to electronics.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tech: ["ReactJS", "React Router", "Flexbox layout", "TailwindCSS"],
    github: "https://github.com/RaviPratihast/ecom-kartshop",
    demo: "https://kartshop-ecom.netlify.app/",
  },
  {
    title: "Personal Note - Basic notes web app",
    description:
      "Basic notes web app inspired by google keep which you can use to jot down important pieces of ideas and list anything that is of importance to you anytime.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tech: ["ReactJS", "React Router", "Flexbox layout", "TailwindCSS"],
    github: "https://github.com/RaviPratihast/my-todo-app-using-React",
    demo: "https://personalnoteapp.netlify.app/",
  },
  {
    title: "Kart UI - Component Library",
    description:
      "Allows you to design and build web Apps faster by providing a range of reusable components.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tech: ["HTML", "CSS"],
    github: "https://github.com/RaviPratihast/kart-UI",
    demo: "https://kart-ui.netlify.app/index.html",
  },
];
