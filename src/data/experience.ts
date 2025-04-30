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
    role: "Frontend Intern",
    location: "Bengaluru, India",
    duration: "Apr 2025 – Present",
    responsibilities: [
      "Developing frontend using TypeScript, Next.js, and ShadCN UI components.",
      "Converted full Figma designs into responsive web interfaces.",
      "Integrated CMS for dynamic content management.",
    ],
  },
  {
    company: "MagicPlug",
    role: "Frontend Engineer (Contract)",
    location: "Bengaluru, India",
    duration: "Jul 2024 – Apr 2025",
    responsibilities: [
      "Built and optimized responsive UI components using React.js, Next.js, and Tailwind CSS.",
      "Integrated APIs for seamless user experiences.",
      "Ensured cross-browser compatibility and performance optimizations.",
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
