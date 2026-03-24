import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";

export function Projects() {
  return (
    <section id="projects" className="section-projects-home py-16 bg-gray-50 dark:bg-gray-800">
      <div className="section-projects-home-inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="projects-home-header text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-xl text-gray-500 dark:text-gray-400">
            Here are some of my recent projects showcasing my frontend
            development skills
          </p>
        </motion.div>

        <div className="projects-home-grid mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="projects-home-card group bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
            >
              <div className="projects-home-card-media relative aspect-[16/10] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  className="projects-home-card-image h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                />
              </div>
              <div className="projects-home-card-body p-4 sm:p-6">
                <motion.h3
                  className="projects-home-card-title text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white"
                  whileHover={{ scale: 1.02 }}
                >
                  {project.title}
                </motion.h3>
                <p className="projects-home-card-desc mt-2 text-base sm:text-lg text-gray-500 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="projects-home-card-tags mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className="projects-home-tag px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/50 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="projects-home-card-links mt-6 flex flex-wrap gap-4">
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
