// import React from 'react';
import { motion } from "framer-motion";
import { Hero } from "../components/sections/Hero";
import { Projects } from "../components/sections/Projects";
import { Skills } from "../components/sections/Skills";
import { Experience } from "../components/sections/Experience";

export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="main-home min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200"
    >
      <Hero />
      <Experience />
      <Projects />
      <Skills />
    </motion.div>
  );
}
