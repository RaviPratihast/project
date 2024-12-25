// import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Projects } from '../components/sections/Projects';
import { Skills } from '../components/sections/Skills';
import { Contact } from '../components/Contact';

export function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}