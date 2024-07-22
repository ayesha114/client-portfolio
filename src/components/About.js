import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Zoraiz.
            <br className="hidden lg:inline-block" />I love to develop amazing
            Websites.
          </h1>
          <p className="mb-8 leading-relaxed">
            Creative professional skilled in web development, SEO, graphics,
            photography, videography, and editing. Expert in logo, banner, and
            business card design. Passionate about crypto trading.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg transform transition-transform duration-500 hover:scale-110 hover:shadow-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg transform transition-transform duration-500 hover:scale-110 hover:shadow-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-md lg:w-1/2 md:w-1/2 w-full flex justify-center">
          <img
            className="object-cover object-center rounded-full shadow-lg h-85 w-80 transform transition-transform duration-500 hover:scale-110 hover:rotate-6"
            alt="hero"
            src="./coding.jpg"
          />
        </div>
      </div>
    </section>
  );
}
