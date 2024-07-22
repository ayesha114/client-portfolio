import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { Experience as ExperienceData } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-10 text-center">
      <CodeIcon className="mx-auto inline-block w-10 mb-4" />
        <h1 className="text-4xl font-medium title-font text-white mb-12 text-center">
          Experience
        </h1>
        <div className="flex flex-wrap -m-4" >
          {ExperienceData.map((exp, index) => (
            <div key={index} className="p-4 md:w-1/2 w-full text-left">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <h2 className="text-green-500 text-lg mb-1 font-medium title-font">
                  {exp.year}
                </h2>
                <h3 className="text-white text-xl font-medium title-font mb-3">
                  {exp.title}
                </h3>
                <h4 className="text-gray-400 text-lg mb-3">
                  {exp.institution}
                </h4>
                <p className="leading-relaxed text-base text-gray-400">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
