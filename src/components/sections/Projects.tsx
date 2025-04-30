import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Here are some of my recent projects showcasing my frontend
            development skills
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
            >
              <div className="p-6">
                <motion.h3
                  className="text-xl font-semibold text-gray-900 dark:text-white"
                  whileHover={{ scale: 1.02 }}
                >
                  {project.title}
                </motion.h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/50 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="mt-6 flex space-x-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-5 w-5 mr-2" />
                      Code
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Live Demo
                    </motion.a>
                  )}
                  {project.projectLink && (
                    <motion.a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Project Link
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
