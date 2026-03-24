import { Linkedin, FileDown } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

// import { Button } from "../ui/Button";
import imagePath from "./../../Image/Ravi Shankar Pratihast.jpeg";
import resumeFile from "../../Assets/RaviSPratihast:resume.pdf";
export function Hero() {
  return (
    <section className="section-hero-home pt-24 pb-12 sm:pb-16">
      <div className="section-hero-home-inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero-home-layout lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="hero-home-content text-left sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="hero-home-heading">
              <span className="hero-home-kicker block text-start text-sm sm:text-base font-semibold tracking-wide text-indigo-600 dark:text-indigo-400 animate-fade-in-up">
                Frontend Engineer · Bengaluru, India
              </span>
              <span className="hero-home-title mt-1 text-start block text-[40px] leading-[1.05] tracking-tight font-extrabold sm:text-5xl xl:text-6xl text-gray-900 dark:text-white animate-fade-in-up ">
                Ravi Shankar Pratihast
              </span>
            </h1>
            <p className="hero-home-body mt-3 text-lg leading-relaxed text-left text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl animate-fade-in-up [animation-delay:100ms]">
              Frontend engineer focused on building fast, reliable web
              products with React, Next.js, TypeScript, and Tailwind CSS.
              I turn Figma designs into production-ready interfaces, integrate
              APIs cleanly, and optimize for accessibility, performance, and
              responsive behavior across devices.
            </p>
            <div className="hero-home-actions mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 animate-fade-in-up [animation-delay:200ms]">
              <div className="hero-home-socials flex flex-wrap justify-start md:justify-start lg:justify-start gap-5">
                <a
                  href={resumeFile}
                  download="RaviSPratihast_resume.pdf"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-all duration-300 hover:scale-110"
                >
                  <FileDown className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/RaviPratihast"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-all duration-300 hover:scale-110"
                >
                  <LuGithub className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ravipratihast/"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://x.com/pratihast_ravi"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-all duration-300 hover:scale-110"
                >
                  <FaXTwitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-home-media mt-10 sm:mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center ">
            <div className="hero-home-photo-wrap relative mx-auto w-full max-w-[360px] sm:max-w-none rounded-lg shadow-lg lg:max-w-md transform-gpu transition-all duration-500 hover:animate-fold md:hover:animate-fold hover:shadow-2xl">
              <img
                className="hero-home-photo w-full rounded-lg"
                src={imagePath}
                alt="Developer workspace"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
