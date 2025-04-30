import { Mail, MapPin, Phone, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Linkedin } from "lucide-react";

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Get in Touch
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <div className="space-y-6">
              <motion.div
                className="flex items-center md:gap-2 lg:gap-2 group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  <span className="ml-4 text-gray-900 dark:text-white">
                    ravishankarpratihast22@gmail.com
                  </span>
                </div>
                <button
                  onClick={() =>
                    copyToClipboard("ravishankarpratihast22@gmail.com", "email")
                  }
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {copiedEmail ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <Copy className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  )}
                </button>
              </motion.div>

              <motion.div
                className="flex items-center group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2">
                  <Phone className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  <span className="ml-4 text-gray-900 dark:text-white">
                    +91 - 7002161376
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard("+917002161376", "phone")}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {copiedPhone ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <Copy className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  )}
                </button>
              </motion.div>

              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <span className="ml-4 text-gray-900 dark:text-white">
                  Bangaluru, India
                </span>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Connect with me
            </h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/in/ravipratihast/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                 <a
                  href="https://www.linkedin.com/in/ravipratihast/"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
