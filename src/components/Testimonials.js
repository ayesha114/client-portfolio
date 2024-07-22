import React, { useState } from "react";
import { TerminalIcon, UsersIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const initialTestimonials = [
  {
    quote: "Working with this team was an absolute pleasure. They delivered high-quality work on time and exceeded our expectations.",
    name: "John Doe",
    company: "Tech Solutions Inc.",
  },
  {
    quote: "I was impressed by their professionalism and expertise. They provided insightful solutions that greatly enhanced our online presence.",
    name: "Jane Smith",
    company: "Creative Agency",
  },
  {
    quote: "Their innovative approach and creative ideas were exactly what we needed. The team was responsive and adaptable.",
    name: "Michael Brown",
    company: "Marketing Pros",
  },
  {
    quote: "The level of service and quality of work provided was outstanding. They went above and beyond to make sure everything was perfect.",
    name: "Emily Davis",
    company: "StartUp Ventures",
  },
];

export default function Testimonials() {
  const [testimonials] = useState(initialTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Client Testimonials
        </h1>
        <div className="flex justify-center items-center">
          <button onClick={handlePrev} className="text-white hover:text-green-500 transition duration-300 ease-in-out">
            <ChevronLeftIcon className="w-10 h-10" />
          </button>
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded hover:bg-green-500 hover:text-white transition duration-300 ease-in-out shadow-lg">
              <TerminalIcon className="block w-8 text-gray-500 mb-4" />
              <p className="leading-relaxed mb-6">{testimonials[currentIndex].quote}</p>
              <div className="inline-flex items-center">
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-white">
                    {testimonials[currentIndex].name}
                  </span>
                  <span className="text-gray-500 text-sm uppercase">
                    {testimonials[currentIndex].company}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <button onClick={handleNext} className="text-white hover:text-green-500 transition duration-300 ease-in-out">
            <ChevronRightIcon className="w-10 h-10" />
          </button>
        </div>
      </div>
    </section>
  );
}
