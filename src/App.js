import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import InfoData from "./components/InfoData";
import Services from "./components/Services";
import Experience from "./components/Experience";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Services />
      <InfoData />
      <Testimonials />
      <Contact />
    </main>
  );
}