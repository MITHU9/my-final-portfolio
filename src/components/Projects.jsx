import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import project1 from "/project1.png";
import project2 from "/project2.png";
import project3 from "/project4.png";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    image: project1,
    brief: "A full-featured e-commerce platform built with React and Node.js",
    description:
      "This e-commerce platform features user authentication, product management, shopping cart functionality, and secure payment processing. The project was challenging due to the complex state management requirements and the need for real-time inventory updates.",
    technologies: ["React", "tailwindCSS", "Firebase"],
    liveLink: "https://gadget-heaven-by-mithu9.netlify.app/",
    githubLink: "https://github.com/MITHU9/gadget-heaven",
    challenges:
      "One of the main challenges was implementing real-time inventory management while handling concurrent user sessions. I solved this using WebSocket connections and implemented optimistic UI updates.",
    improvements:
      "Future improvements include adding a recommendation system, implementing better caching strategies, and adding more payment options.",
  },
  {
    id: 2,
    title: "Task Management App",
    image: project2,
    brief: "A collaborative task management application",
    description:
      "A real-time task management application that allows teams to collaborate on projects. Features include drag-and-drop task organization, real-time updates, and team chat.",
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
      "Implementing real-time updates and maintaining consistent state across multiple users was challenging. I used Firebase Real-time Database and implemented optimistic updates to solve this.",
    improvements:
      "Planning to add file attachments, time tracking, and integration with popular project management tools.",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    image: project3,
    brief: "A weather forecasting application with beautiful visualizations",
    description:
      "A weather dashboard that provides detailed weather information and forecasts. Features include interactive maps, charts for weather trends, and location-based weather alerts.",
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
      "Future plans include adding more detailed historical data analysis and implementing push notifications for weather alerts.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.brief}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
                className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {selectedProject.title}
                    </h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-500 hover:text-gray-700"
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
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Description
                      </h4>
                      <p className="text-gray-600">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Challenges & Solutions
                      </h4>
                      <p className="text-gray-600">
                        {selectedProject.challenges}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Future Improvements
                      </h4>
                      <p className="text-gray-600">
                        {selectedProject.improvements}
                      </p>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        Live Demo
                      </a>
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
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
