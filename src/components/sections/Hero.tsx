import { Linkedin, FileDown } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

// import { Button } from "../ui/Button";
import imagePath from "./../../Image/Ravi Shankar Pratihast.jpeg";
import resumeFile from "../../Assets/RaviSPratihast(FE).pdf";
export function Hero() {
  return (
    <section className="pt-24 pb-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-base font-semibold tracking-wide text-indigo-600 dark:text-indigo-400 uppercase animate-fade-in-up">
                Frontend Engineer
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl text-gray-900 dark:text-white animate-fade-in-up ">
                Ravi Shankar Pratihast
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl animate-fade-in-up [animation-delay:100ms]">
              I craft exceptional web experiences using modern technologies and
              best practices. Specializing in React, responsive design, and
              ensuring smooth version control with Git, I focus on building
              scalable, user-friendly applications. With expertise in
              JavaScript, HTML, CSS, and Tailwind CSS, I am committed to
              creating seamless, high-quality web solutions that meet both user
              needs and business goals.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 animate-fade-in-up [animation-delay:200ms]">
              <div className="flex justify-center lg:justify-start space-x-6">
                <a
                  href={resumeFile}
                  download="RaviSPratihast_Frontend.pdf"
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
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center ">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md transform-gpu transition-all duration-500 hover:animate-fold md:hover:animate-fold hover:shadow-2xl">
              <img
                className="w-full rounded-lg"
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
