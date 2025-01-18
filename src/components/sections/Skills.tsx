// import React from 'react';
import { Code2, Layout, Sparkles, Gauge } from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    icon: <Layout className="h-6 w-6" />,
    items: ["React", "Redux", "React Router", "Typescript (Learning)"],
  },
  {
    category: "UI Technologies",
    icon: <Sparkles className="h-6 w-6" />,
    items: ["Tailwind CSS", "Material-UI", "Lucid-React", "Styled Components"],
  },
  {
    category: "Development Tools",
    icon: <Code2 className="h-6 w-6" />,
    items: ["Git", "Version-control", "Webpack", "Vite"],
  },
  {
    category: "Best Practices",
    icon: <Gauge className="h-6 w-6" />,
    items: ["Clean Code", "Testing", "Performance", "Accessibility"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            My technical skills and areas of expertise in frontend development
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="text-indigo-600 dark:text-indigo-400">
                {skill.icon}
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                {skill.category}
              </h3>
              <ul className="mt-2 space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-500 dark:text-gray-400">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
