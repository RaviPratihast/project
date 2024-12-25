// import React from 'react';
// import { Code2, Layout, Sparkles, Gauge } from 'lucide-react';

// export function Skills() {
//   const skills = [
//     {
//       category: "Frontend Development",
//       icon: <Layout className="h-6 w-6" />,
//       items: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
//     },
//     {
//       category: "Development Tools",
//       icon: <Code2 className="h-6 w-6" />,
//       items: ["Git", "VS Code", "Webpack", "Jest"]
//     },
//     {
//       category: "UI/UX",
//       icon: <Sparkles className="h-6 w-6" />,
//       items: ["Responsive Design", "Accessibility", "UI Animation", "Design Systems"]
//     },
//     {
//       category: "Performance",
//       icon: <Gauge className="h-6 w-6" />,
//       items: ["Web Vitals", "Code Splitting", "Optimization", "SEO"]
//     }
//   ];

//   return (
//     <section id="skills" className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Skills & Expertise</h2>
//           <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
//             Comprehensive toolkit for modern web development
//           </p>
//         </div>

//         <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
//           {skills.map((skill) => (
//             <div key={skill.category} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
//               <div className="text-indigo-600">{skill.icon}</div>
//               <h3 className="mt-4 text-lg font-medium text-gray-900">{skill.category}</h3>
//               <ul className="mt-2 space-y-2">
//                 {skill.items.map((item) => (
//                   <li key={item} className="text-gray-500">{item}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }