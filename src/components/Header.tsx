import React from 'react';
import { Github, Linkedin, Mail, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">Ravi Shankar Pratihast</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="#skills" className="text-gray-700 hover:text-gray-900">Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" className="text-gray-500 hover:text-gray-700">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" className="text-gray-500 hover:text-gray-700">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-500 hover:text-gray-700">
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-gray-500 hover:text-gray-700">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}