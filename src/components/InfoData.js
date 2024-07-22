import React from "react";
import { InfoData } from "../data";
import { CodeIcon } from "@heroicons/react/solid";

const Info = () => {
  return (
    <section id="InfoData" className="bg-gray-900 text-white p-8">
      <div className="container mx-auto max-w-5xl text-center">
      <CodeIcon className="mx-auto inline-block w-10 mb-4" />
        <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-left">
          <div className="bg-gray-800 p-6 rounded-lg max-w-md mx-1/5">
            <p className="text-lg mb-4">{InfoData.description}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg max-w-md mx-1/5 ">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <strong>Name:</strong> {InfoData.name}
              </div>
              {/* <div className="col-span-2">
                <strong>Education:</strong> {InfoData.education}
              </div> */}
              <div className="col-span-2">
                <strong>Address:</strong> {InfoData.address}
              </div>
              <div className="col-span-2">  
                <strong>Email:</strong>{" "}
                <a href={`mailto:${InfoData.email}`} className="text-green-500">
                  {InfoData.email}
                </a>
              </div>
              <div className="col-span-2">
                <strong>Phone:</strong>{" "}
                <a href={`tel:${InfoData.phone}`} className="text-green-500">
                  {InfoData.phone}
                </a>
              </div>
              {/* <div className="col-span-2">
                <strong>LinkedIn:</strong> <a href={InfoData.linkedin} className="text-green-500">{InfoData.linkedin}</a>
              </div>
              <div className="col-span-2">
                <strong>GitHub:</strong> <a href={InfoData.github} className="text-green-500">{InfoData.github}</a>
              </div>
              <div className="col-span-2">
                <strong>Lablab:</strong> <a href={InfoData.lablab} className="text-green-500">{InfoData.lablab}</a>
              </div>
              <div className="col-span-2">
                <strong>LeetCode:</strong> <a href={InfoData.leetcode} className="text-green-500">{InfoData.leetcode}</a>
              </div>
              <div className="col-span-2">
                <strong>Instagram:</strong> <a href={InfoData.instagram} className="text-green-500">{InfoData.instagram}</a>
              </div> */}
              <div className="col-span-2 text-center mt-4">
                <span className="text-green-500 font-bold">
                  {InfoData.projectComplete}
                </span>{" "}
                Projects Completed
              </div>
              <div className="col-span-2 text-center mt-6">
                <a
                  href="https://drive.google.com/file/d/1iz0vT0DFtbs7IYCDj4B8OgW47nnh_qt4/view" // Change this to the actual path of the resume file
                  download
                  className="bg-green-500 text-black px-4 py-2 rounded-lg font-bold"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
