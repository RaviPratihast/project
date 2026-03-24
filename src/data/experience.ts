export interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    company: "Quixta",
    role: "Frontend Engineer",
    location: "Bengaluru, India",
    duration: "Apr 2025 – Present",
    responsibilities: [
      "Ship production websites and web apps with TypeScript and Next.js from Figma — APIs, state, and reusable UI modules.",
      "Improved Lighthouse scores and optimized client-side rendering for scale.",
      "Collaborated with designers and engineers on delivery and quality.",
    ],
  },
  {
    company: "MagicPlug",
    role: "Frontend Engineer (Contract)",
    location: "Bengaluru, India",
    duration: "Jul 2024 – Apr 2025",
    responsibilities: [
      "Built and optimized scalable, reusable UI with React, Next.js, and Tailwind CSS.",
      "Integrated APIs for a fast, consistent experience across surfaces.",
      "Partnered with design and product for pixel-accurate, accessible UI; cross-browser support, performance, and mobile responsiveness.",
    ],
  },
  {
    company: "Idigitalpreneur",
    role: "Frontend Engineer",
    location: "New Delhi, India",
    duration: "Apr 2024 – Jun 2024",
    responsibilities: [
      "Developed and optimized user interface components using ReactJS.",
      "Collaborated with the team to improve frontend performance and functionality.",
    ],
  },
  {
    company: "Idigitalpreneur",
    role: "Frontend Engineer Intern",
    location: "New Delhi, India",
    duration: "Jan 2024 – Mar 2024",
    responsibilities: [
      "Implemented dynamic UI components to enhance functionality.",
      "Displayed key sales metrics through optimized UI.",
    ],
  },
];
