import { Link } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react"; // Added Menu and X icons from lucide-react
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="header-home fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-100 dark:border-gray-800">
      <div className="nav-home-inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="nav-home-bar flex justify-between items-center h-16">
          {/* Logo / Name */}
          <Link
            to="/"
            className="nav-home-brand max-w-[80vw] truncate text-lg sm:text-xl font-bold text-gray-900 dark:text-white"
          >
            Ravi Shankar Pratihast
          </Link>

          {/* Hamburger Icon (only visible on mobile) */}
          <div className="nav-home-menu-mobile lg:hidden">
            <button
              type="button"
              onClick={handleMenuToggle}
              className="nav-home-menu-toggle p-2 rounded-lg text-gray-700 dark:text-gray-300"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Navigation Links (Desktop and Mobile) */}
          <div className="nav-home-links-desktop hidden lg:flex items-center space-x-8">
            <a
              href="#projects"
              className="nav-home-link nav-home-link-projects text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="nav-home-link nav-home-link-skills text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="nav-home-link nav-home-link-contact text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Contact
            </a>
            <button
              type="button"
              onClick={toggleTheme}
              className="nav-home-theme-toggle p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              aria-label="Toggle color theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu (hidden by default, shown when isMenuOpen is true) */}
        <div
          className={`nav-home-drawer lg:hidden ${isMenuOpen ? "block" : "hidden"}`}
        >
          <div className="nav-home-drawer-inner absolute left-0 right-0 top-16 flex flex-col space-y-4 bg-white dark:bg-gray-800 p-4 border-t border-gray-100 dark:border-gray-700 shadow-lg">
            <a
              href="#projects"
              className="nav-home-link nav-home-link-projects-mobile text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="nav-home-link nav-home-link-skills-mobile text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="nav-home-link nav-home-link-contact-mobile text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <button
              type="button"
              onClick={toggleTheme}
              className="nav-home-theme-toggle-mobile p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              aria-label="Toggle color theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
