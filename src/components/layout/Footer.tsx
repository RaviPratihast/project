import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="footer-home border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 py-12"
    >
      <div className="footer-home-inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="footer-home-contact-card rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/60 p-6 sm:p-8">
          <div className="footer-home-grid relative z-10 grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
            <div className="footer-home-brand">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Ravi Shankar Pratihast
              </h3>
              <p className="mt-3 max-w-md text-sm text-gray-600 dark:text-gray-400">
                Frontend engineer building production-ready web experiences with
                clear UX, strong performance, and clean implementation.
              </p>
            </div>

            <div className="footer-home-links">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                Quick links
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#projects" className="hover:text-gray-900 dark:hover:text-white">Projects</a></li>
                <li><a href="#skills" className="hover:text-gray-900 dark:hover:text-white">Skills</a></li>
                <li><a href="#experience" className="hover:text-gray-900 dark:hover:text-white">Experience</a></li>
              </ul>
            </div>

            <div className="footer-home-contact">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                Contact
              </h4>
              <ul className="mt-3 space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2 min-w-0">
                  <Mail className="h-4 w-4 mt-1 shrink-0" />
                  <a
                    href="mailto:ravishankarpratihast22@gmail.com"
                    className="min-w-0 break-all hover:text-gray-900 dark:hover:text-white"
                  >
                    ravishankarpratihast22@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2 min-w-0">
                  <Phone className="h-4 w-4 mt-1 shrink-0" />
                  <a href="tel:+917002161376" className="hover:text-gray-900 dark:hover:text-white">
                    +91 7002161376
                  </a>
                </li>
                <li className="flex items-start gap-2 min-w-0">
                  <MapPin className="h-4 w-4 mt-1 shrink-0" />
                  <span>Bengaluru, India</span>
                </li>
              </ul>

              <div className="mt-4 flex items-center gap-3">
                <a
                  href="https://github.com/RaviPratihast"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="GitHub profile"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ravipratihast/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-home-wordmark-outer footer-home-marquee mt-6 w-screen max-w-screen relative left-1/2 -translate-x-1/2 overflow-hidden">
          <div className="footer-home-marquee-track">
            <p className="footer-home-wordmark whitespace-nowrap leading-none select-none text-[28px] sm:text-[60px] md:text-[96px] lg:text-[120px] font-black tracking-tight text-gray-200/80 dark:text-gray-800/70 px-4 sm:px-8">
              Frontend engineer · based in India ·
            </p>
            <p
              aria-hidden="true"
              className="footer-home-wordmark whitespace-nowrap leading-none select-none text-[28px] sm:text-[60px] md:text-[96px] lg:text-[120px] font-black tracking-tight text-gray-200/80 dark:text-gray-800/70 px-4 sm:px-8"
            >
              Frontend engineer · based in India ·
            </p>
          </div>
        </div>

        <p className="footer-home-copy mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Ravi Shankar Pratihast. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
