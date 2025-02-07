import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useRef } from "react";

const ProjectCard = ({
  project,
  index,
  setSelectedProject,
  progress,
  range,
  targetScale,
}) => {
  const { darkMode } = useTheme();

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="sticky top-44">
      <motion.div
        key={project.id}
        style={{ scale, top: `calc(-5vh + ${index * 25}px)` }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className={` relative top-[25%] md:flex lg:w-3/4 mx-auto md:h-[400px] rounded-lg border-t-2 border-blue-700 shadow-lg overflow-hidden ${
          darkMode ? "bg-gray-900" : "bg-white"
        } 
              transform transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-2 hover:shadow-2xl hover:translate-y-[-5px] hover:ring-4 hover:ring-blue-500 hover:ring-opacity-50`}
      >
        {/* Image Animation on Hover */}
        <motion.div
          className="relative p-2 md:w-2/5 order-2"
          //   whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          style={{ scale: imageScale }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg h-full object-cover transition-all duration-300 ease-in-out"
          />
        </motion.div>

        <div className="p-6 md:w-3/5 relative md:order-1">
          <h3
            className={`text-xl font-semibold ${
              darkMode ? "text-white" : "text-gray-900"
            } mb-2 
                  transition-all duration-300 ease-in-out hover:text-blue-500`}
          >
            {project.title}
          </h3>
          <p
            className={`text-gray-600 ${darkMode ? "text-white/50" : ""} mb-4 
                  transition-all duration-300 ease-in-out hover:text-gray-700`}
          >
            {project.brief}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedProject(project)}
            className={`inline-flex mt-2 items-center px-4 py-2 ${
              darkMode ? "bg-blue-500 text-gray-900" : "bg-blue-600 text-white"
            } rounded-lg hover:bg-blue-700 transition-all duration-200 ease-in-out`}
          >
            View Details
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
export default ProjectCard;
