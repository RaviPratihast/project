import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback } from "react";
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

  useCallback(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            My journey through the tech industry
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  className="flex-[0_0_100%] min-w-0 px-4"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 h-full">
                    <motion.h3
                      className="text-2xl font-bold text-gray-900 dark:text-white"
                      whileHover={{ scale: 1.02 }}
                    >
                      {exp.company}
                    </motion.h3>
                    <div className="mt-4 space-y-2">
                      <p className="text-lg text-indigo-600 dark:text-indigo-400">
                        {exp.role}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {exp.location}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        {exp.duration}
                      </p>
                    </div>
                    <ul className="mt-6 space-y-2">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
