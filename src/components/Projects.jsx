import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import project1 from "/project1.png";
import project2 from "/project2.png";
import project3 from "/project4.png";
import project5 from "/project5.png";
import project7 from "/project7.png";
import project8 from "/project8.png";

import { useTheme } from "../context/ThemeContext";
import Button from "./button/Button";
import ProjectCard from "./ProjectCard";
import Lenis from "@studio-freight/lenis";

const projects = [
  {
    id: 1,
    title: "Gadget Heaven",
    image: project1,
    brief:
      "A feature-rich e-commerce platform designed for gadget lovers, built with React and Firebase. It includes user authentication, dynamic product management, shopping cart functionality.",
    description:
      "This e-commerce platform features user authentication, product management, shopping cart functionality.",
    technologies: ["React", "tailwindCSS", "Firebase"],
    liveLink: "https://gadget-heaven-by-mithu9.netlify.app/",
    githubLink: "https://github.com/MITHU9/gadget-heaven",
    challenges:
      "Implementing user authentication and shopping cart functionality was challenging. I used Firebase Authentication.",
    improvements:
      "Future improvements include adding a recommendation system, implementing better caching strategies, and adding payment options. I will also add a backend to this project.",
  },
  {
    id: 2,
    title: "Movie Portal",
    image: project2,
    brief:
      "A movie discovery platform that allows users to search for movies, view detailed information, and save favorites. Built with React, Node.js, and MongoDB, it offers a personalized experience with user authentication and a favorites list.",
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
      "Implementing user authentication and handling user-specific data was challenging. I used Firebase Authentication and MongoDB for data storage.",
    improvements:
      "Future improvements include adding a review system, implementing a notification system, and developing a mobile app.",
  },
  {
    id: 3,
    title: "Home Repair Service",
    image: project3,
    brief:
      "A service marketplace connecting homeowners with skilled professionals for home repairs and maintenance. Features include secure authentication, service provider profiles, and an efficient booking system.",
    description:
      "A platform that connects homeowners with service providers for home repair and maintenance services. Features include user authentication, service provider profiles, and service booking.",
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
      "Future improvements include adding a review system, implementing a notification system, and developing a mobile app.",
  },
  {
    id: 4,
    title: "YouTube Clone",
    image: project5,
    brief:
      "A fully responsive YouTube-like platform where users can browse, watch, and explore videos from different categories. Built with React and the YouTube API, it provides seamless video playback and an engaging UI.",
    description:
      "A YouTube clone that features video playback, category-wise data fetching, and video recommendations. The app is responsive and mobile-friendly.",
    technologies: ["React", "CSS", "YouTube API"],
    liveLink: "https://youtube-clone-by-mithu.netlify.app/",
    githubLink: "https://github.com/MITHU9/youtube-clone-project",
    challenges:
      "Fetching and displaying data from the YouTube API was challenging.",
    improvements:
      "Future improvements include adding search functionality, implementing a notification system, and integrating a backend.",
  },
  {
    id: 5,
    title: "ForumHub - A Forum Website",
    image: project7,
    brief:
      "An interactive discussion platform where users can create and join forums, post questions, and engage with the community. It includes authentication, voting, and comment management for a dynamic user experience.",
    description:
      "A platform that allows users to create and join forums, post questions, and answer questions. Features include user authentication and user-specific data.",
    technologies: [
      "React",
      "tailwindCSS",
      "NodeJs",
      "Express",
      "MongoDB",
      "Firebase",
    ],
    liveLink: "https://forumhub-by-mithu9.netlify.app/",
    githubLink: "https://github.com/MITHU9/forum-hub-frontend",
    challenges:
      "Implementing voting restrictions and managing post deletions with associated comments was challenging. I used Firebase Authentication and MongoDB for data storage, along with features like reporting and comment deletion.",
    improvements:
      "Future improvements include adding a review system, implementing a notification system, and creating a mobile app.",
  },
  {
    id: 6,
    title: "TalkyTime - A Chat Application",
    image: project8,
    brief:
      "A real-time chat application featuring private and group chats, online/offline status indicators, typing indicators, and notifications. Built with React, Socket.io, and MongoDB for smooth and instant communication.",
    description:
      "A platform that allows users to chat with each other. Features include user authentication, single chat, group chat, user-specific data, and additional real-time features like online status, typing indicators, and notifications.",
    technologies: [
      "React",
      "MaterialUI",
      "NodeJs",
      "Express",
      "MongoDB",
      "JWT",
      "Socket.io",
    ],
    liveLink: "https://chat-app-by-mithu9.netlify.app/",
    githubLink: "https://github.com/MITHU9/realtime-chat-app",
    challenges:
      "Implementing real-time messaging and notifications with Socket.io was challenging. Redux Toolkit was used for efficient state management.",
    improvements:
      "Future improvements include enhancing UI/UX, adding features like video calls, voice calls, and creating a mobile app.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const { darkMode } = useTheme();

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <section
      id="projects"
      className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div ref={container} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20 sticky top-20"
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

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => {
            const targetScale = 1 - (projects.length - index) * 0.05;

            return (
              <ProjectCard
                key={index}
                setSelectedProject={setSelectedProject}
                index={index}
                project={project}
                progress={scrollYProgress}
                range={[index * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
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
                      <Button
                        text={"Live Demo"}
                        liveLink={selectedProject.liveLink}
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-4 py-2 ${
                          darkMode
                            ? "bg-blue-500 text-gray-900"
                            : "bg-blue-600 text-white"
                        } rounded-lg hover:bg-blue-700 transition-colors`}
                      >
                        <ExternalLink size={18} className="mr-2" />
                      </Button>
                      <Button
                        text="View Code"
                        githubLink={selectedProject.githubLink}
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-4 py-2 border-2 ${
                          darkMode
                            ? "border-gray-400 text-gray-300"
                            : "border-gray-900 text-gray-900"
                        } rounded-lg hover:bg-gray-100 hover:text-gray-600 transition-colors`}
                      >
                        <Github size={18} className="mr-2" />
                      </Button>
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
