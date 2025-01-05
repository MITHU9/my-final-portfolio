import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import project1 from "/project1.png";
import project2 from "/project2.png";
import project3 from "/project4.png";
import { useTheme } from "../context/ThemeContext";

const projects = [
  {
    id: 1,
    title: "gadget heaven",
    image: project1,
    brief: "An e-commerce platform for gadgets",
    description:
      "This e-commerce platform features user authentication, product management, shopping cart functionality",
    technologies: ["React", "tailwindCSS", "Firebase"],
    liveLink: "https://gadget-heaven-by-mithu9.netlify.app/",
    githubLink: "https://github.com/MITHU9/gadget-heaven",
    challenges:
      "Implementing user authentication and shopping cart functionality was challenging. I used Firebase Authentication.",
    improvements:
      "Future improvements include adding a recommendation system, implementing better caching strategies, and adding payment options. And also I will add a backend to this project.",
  },
  {
    id: 2,
    title: "Movie Portal",
    image: project2,
    brief: "Movie portal built with React and Node.js",
    description:
      "A platform that allows users to search for movies, view movie details, and add movies to their Favlist. Features include user authentication, and user-specific Favlist.",
    technologies: [
      "React",
      "tailwindCSS",
      "NodeJs",
      "Express",
      "MongoDB",
      "Firebase",
    ],
    liveLink: "https://movie-portal-by-mithu9.netlify.app/",
    githubLink: "https://github.com/MITHU9/movie-portal",
    challenges:
      "Implementing user authentication and user-specific data was challenging. I used Firebase Authentication and MongoDB for store data .",
    improvements:
      "Future improvements include adding a review system, implementing a notification system, and adding a mobile app.",
  },
  {
    id: 3,
    title: "Home Repair Service",
    image: project3,
    brief: "Home repair service platform built with React and Node.js",
    description:
      " A platform that connects homeowners with service providers for home repair and maintenance services. Features include user authentication, service provider profiles, and service booking.",
    technologies: [
      "React",
      "tailwindCSS",
      "NodeJs",
      "Express",
      "MongoDB",
      "Firebase",
    ],
    liveLink: "https://home-repair-service-by-mithu9.netlify.app/",
    githubLink: "https://github.com/MITHU9/home-repair-services",
    challenges:
      "Working with multiple APIs and creating smooth data visualizations was challenging. I implemented proper error handling and loading states to improve user experience.",
    improvements:
      "Future improvements include adding a review system, implementing a notification system, and adding a mobile app.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const { darkMode } = useTheme();

  return (
    <section
      id="projects"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            className={`text-3xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Projects
          </h2>
          <div
            className={`mt-2 h-1 w-20 ${
              darkMode ? "bg-blue-400" : "bg-blue-600"
            } mx-auto`}
          ></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-lg shadow-lg overflow-hidden ${
                darkMode ? "bg-gray-800" : "bg-white"
              } 
              transform transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-2 hover:shadow-2xl hover:translate-y-[-5px] hover:ring-4 hover:ring-blue-500 hover:ring-opacity-50`}
            >
              {/* Image Animation on Hover */}
              <motion.div
                className="relative h-48"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-300 ease-in-out"
                />
              </motion.div>

              <div className="p-6 relative">
                <h3
                  className={`text-xl font-semibold ${
                    darkMode ? "text-white" : "text-gray-900"
                  } mb-2 
                  transition-all duration-300 ease-in-out hover:text-blue-500`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-gray-600 ${
                    darkMode ? "text-white/50" : ""
                  } mb-4 
                  transition-all duration-300 ease-in-out hover:text-gray-700`}
                >
                  {project.brief}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedProject(project)}
                  className={`inline-flex items-center px-4 py-2 ${
                    darkMode
                      ? "bg-blue-500 text-gray-900"
                      : "bg-blue-600 text-white"
                  } rounded-lg hover:bg-blue-700 transition-all duration-200 ease-in-out`}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className={`rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3
                      className={`text-2xl font-bold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {selectedProject.title}
                    </h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className={`text-gray-500 hover:text-gray-700 ${
                        darkMode ? "text-gray-400" : ""
                      }`}
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />

                  <div className="space-y-4">
                    <div>
                      <h4
                        className={`text-lg font-semibold ${
                          darkMode ? "text-white" : "text-gray-900"
                        } mb-2`}
                      >
                        Description
                      </h4>
                      <p
                        className={`text-gray-600 ${
                          darkMode ? "text-white/60" : ""
                        }`}
                      >
                        {selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <h4
                        className={`text-lg font-semibold ${
                          darkMode ? "text-white" : "text-gray-900"
                        } mb-2`}
                      >
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 ${
                              darkMode
                                ? "bg-gray-700 text-gray-300"
                                : "bg-gray-100 text-gray-700"
                            } rounded-full text-sm`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4
                        className={`text-lg font-semibold ${
                          darkMode ? "text-white" : "text-gray-900"
                        } mb-2`}
                      >
                        Challenges & Solutions
                      </h4>
                      <p
                        className={`text-gray-600 ${
                          darkMode ? "text-white/60" : ""
                        }`}
                      >
                        {selectedProject.challenges}
                      </p>
                    </div>

                    <div>
                      <h4
                        className={`text-lg font-semibold ${
                          darkMode ? "text-white" : "text-gray-900"
                        } mb-2`}
                      >
                        Future Improvements
                      </h4>
                      <p
                        className={`text-gray-600 ${
                          darkMode ? "text-white/60" : ""
                        }`}
                      >
                        {selectedProject.improvements}
                      </p>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-4 py-2 ${
                          darkMode
                            ? "bg-blue-500 text-gray-900"
                            : "bg-blue-600 text-white"
                        } rounded-lg hover:bg-blue-700 transition-colors`}
                      >
                        <ExternalLink size={18} className="mr-2" />
                        Live Demo
                      </a>
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-4 py-2 border-2 ${
                          darkMode
                            ? "border-gray-400 text-gray-300"
                            : "border-gray-900 text-gray-900"
                        } rounded-lg hover:bg-gray-100 hover:text-gray-600 transition-colors`}
                      >
                        <Github size={18} className="mr-2" />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
