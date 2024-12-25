// import React from 'react';
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Get in Touch
          </h2>
          {/* <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Let's discuss your next project
          </p> */}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 ">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-indigo-600" />
                <span className="ml-4 text-gray-900 dark:text-white">
                  ravishankarpratihast22@gmail.com
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-indigo-600" />
                <span className="ml-4 text-gray-900 dark:text-white">
                  +91 - 7002161376
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-indigo-600" />
                <span className="ml-4 text-gray-900 dark:text-white">
                  Bangaluru, India
                </span>
              </div>
            </div>
          </div>

          {/* <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </form> */}
        </div>
      </div>
    </section>
  );
}
