import React from "react";

export default function Services() {
  const services = [
    { 
      title: "WEB DEVELOPER",
      description: "Building responsive and high-performance websites using modern web technologies."
    },
    { 
      title: "SEO",
      description: "Optimizing websites to improve search engine rankings and drive organic traffic."
    },
    { 
      title: "WORDPRESS",
      description: "Developing and customizing WordPress websites tailored to client needs."
    },
    { 
      title: "GRAPHICS DESIGNING",
      description: "Designing stunning visuals for digital and print media, including logos and banners."
    },
    { 
      title: "PHOTO & VIDEO EDITING",
      description: "Enhancing photos and videos to create captivating visual content."
    },
    { 
      title: "ADOBE PHOTOSHOP",
      description: "Expertise in using Adobe Photoshop for advanced photo editing and graphic design."
    },
    { 
      title: "CRYPTO TRADING",
      description: "Providing insights and strategies for successful cryptocurrency trading."
    },
  ];

  return (
    <section id="services" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        
        <div className="text-center mb-20">
          
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Services
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here are the services I offer:
          </p>
        </div>
        <div className="flex flex-wrap -m-2 justify-center">
          {services.map((service, index) => (
            <div key={index} className="p-2 md:w-1/2 lg:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-40 p-6 flex-col hover:bg-green-500 hover:text-white transition duration-300 ease-in-out shadow-lg">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">
                    {service.title}
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
