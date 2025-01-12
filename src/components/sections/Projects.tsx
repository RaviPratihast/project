import React from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: "Fwiggy - A Food Delivery webApp",
    description: "A Food Delivery App, built with React.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80",
    tech: [
      "ReactJS",
      "Redux",
      "React Router",
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
    title: "Personal Note - Basic notes web app. ",
    description:
      "basic notes web app inspired by google keep which you can use to jot down important pieces of ideas and list anything that is of importance to you anytime.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tech: ["ReactJS", "React Router", "Flexbox layout", "TailwindCSS"],
    github: "https://github.com/RaviPratihast/my-todo-app-using-React",
    demo: "https://personalnoteapp.netlify.app/",
  },
  {
    title: "Kart UI - Component Library ",
    description:
      "allows you to design and build web Apps faster by providing a range of reusable components.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tech: ["HTML", "CSS"],
    github: "https://github.com/RaviPratihast/kart-UI",
    demo: "https://kart-ui.netlify.app/index.html",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Here are some of my recent projects showcasing my frontend
            development skills
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
            >
              {/* <img
                className="w-full h-48 object-cover"
                src={project.image}
                alt={project.title}
              /> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/50 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex space-x-4">
                  <a
                    href={project.github}
                    className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
