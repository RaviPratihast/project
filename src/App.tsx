// import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";
// import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <ThemeProvider>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <div className="shell-home min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
          <Navbar />
          <Home />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
