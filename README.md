# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my projects, skills, and professional experience in a clean and interactive way.

## 🚀 Technologies Used

- **Frontend Framework**: React.js with TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (or your preferred hosting platform)

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/         # Main section components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   └── ui/              # Reusable UI components
│       ├── Button.tsx
│       └── ThemeToggle.tsx
├── data/                # Static data
│   ├── experience.ts
│   ├── projects.ts
│   └── skills.ts
├── lib/                 # Utility functions
│   └── utils.ts
└── App.tsx             # Main application component
```

## 🛠️ Key Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode**: Built-in dark mode support
- **Animations**: Smooth animations using Framer Motion
- **Project Showcase**: Interactive project cards with live demos and GitHub links
- **Experience Timeline**: Visual representation of work experience
- **Skills Section**: Organized display of technical skills
- **Contact Form**: Interactive contact section

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^4.9.5",
    "tailwindcss": "^3.3.0",
    "framer-motion": "^10.12.4",
    "lucide-react": "^0.263.1"
  }
}
```

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone [your-repository-url]
   cd [your-project-name]
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

- Update project data in `src/data/projects.ts`
- Modify experience details in `src/data/experience.ts`
- Adjust skills in `src/data/skills.ts`
- Customize styling in `tailwind.config.js`

## 🌐 Deployment

The project can be deployed on any static site hosting service:

- Vercel
- Netlify
- GitHub Pages

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
