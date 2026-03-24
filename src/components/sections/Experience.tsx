import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { experiences } from "../../data/experience";

export function Experience() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="experience" className="section-experience-home py-16 bg-gray-50 dark:bg-gray-800">
      <div className="section-experience-home-inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="experience-home-header text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-xl text-gray-500 dark:text-gray-400">
            My journey through the tech industry
          </p>
        </motion.div>

        <div className="experience-home-carousel-wrap relative">
          <div className="experience-home-viewport overflow-hidden" ref={emblaRef}>
            <div className="experience-home-track flex">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.role}-${exp.duration}`}
                  className="experience-home-slide flex-[0_0_100%] min-w-0 px-1 sm:px-4"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="experience-home-card bg-white dark:bg-gray-900 rounded-lg shadow-lg p-5 sm:p-8 h-full">
                    <motion.h3
                      className="experience-home-company text-xl sm:text-2xl font-bold text-gray-900 dark:text-white"
                      whileHover={{ scale: 1.02 }}
                    >
                      {exp.company}
                    </motion.h3>
                    <div className="experience-home-meta mt-4 space-y-2">
                      <p className="experience-home-role text-base sm:text-lg text-indigo-600 dark:text-indigo-400">
                        {exp.role}
                      </p>
                      <p className="experience-home-location text-gray-600 dark:text-gray-300">
                        {exp.location}
                      </p>
                      <p className="experience-home-duration text-gray-500 dark:text-gray-400">
                        {exp.duration}
                      </p>
                    </div>
                    <ul className="experience-home-responsibilities mt-6 space-y-2 text-lg sm:text-base">
                      {exp.responsibilities.map((resp, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start text-gray-600 dark:text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                        >
                          <span className="mr-2 text-indigo-600 dark:text-indigo-400">
                            •
                          </span>
                          {resp}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="experience-home-nav-prev hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={scrollPrev}
            aria-label="Previous experience"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
          <button
            type="button"
            className="experience-home-nav-next hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={scrollNext}
            aria-label="Next experience"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>

          <div className="mt-5 sm:hidden flex justify-center gap-2">
            {experiences.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to experience ${index + 1}`}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2.5 rounded-full transition-all ${
                  selectedIndex === index
                    ? "w-6 bg-indigo-500"
                    : "w-2.5 bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
