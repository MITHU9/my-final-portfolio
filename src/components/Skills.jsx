import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", level: 90 },
      { name: "React", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 50 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Next.js", level: 50 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 60 },
      { name: "Express", level: 60 },
      { name: "MongoDB", level: 65 },
      { name: "PostgreSQL", level: 30 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 55 },
      { name: "Docker", level: 25 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 65 },
    ],
  },
];

export default function Skills() {
  const { darkMode } = useTheme();

  const tools = [
    { name: "React", icon: <FaReact size={32} /> },
    { name: "Node.js", icon: <FaNodeJs size={32} /> },
    { name: "HTML", icon: <FaHtml5 size={32} /> },
    { name: "CSS", icon: <FaCss3Alt size={32} /> },
    { name: "Git", icon: <FaGitAlt size={32} /> },
    { name: "JavaScript", icon: <FaJs size={32} /> },
    { name: "Python", icon: <FaPython size={32} /> },
    { name: "Database", icon: <FaDatabase size={32} /> },
    { name: "Nextjs", icon: <SiNextdotjs size={32} /> },
    { name: "TypeScript", icon: <SiTypescript size={32} /> },
    { name: "Docker", icon: <FaDocker size={32} /> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={32} /> },
    { name: "Express", icon: <SiExpress size={32} /> },
    { name: "MongoDB", icon: <SiMongodb size={32} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={32} /> },
  ];

  return (
    <section
      id="skills"
      className={`py-20 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
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
            Skills
          </h2>
          <div
            className={`mt-2 h-1 w-20 ${
              darkMode ? "bg-blue-400" : "bg-blue-600"
            } mx-auto`}
          ></div>
        </motion.div>

        {/* First scrolling animation (Left to Right) */}
        <div className="mt-12 text-center">
          <div className="relative overflow-hidden">
            <div className="flex space-x-12 animate-marquee-left-to-right">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center space-y-2"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="p-4 bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 dark:bg-gradient-to-r dark:from-blue-700 dark:via-purple-800 dark:to-red-700 rounded-full text-white"
                  >
                    {tool.icon}
                  </motion.div>
                  <span
                    className={`text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second scrolling animation (Right to Left) */}
        <div className="mt-12 text-center">
          <div className="relative overflow-hidden">
            <div className="flex space-x-12 animate-marquee-right-to-left">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center space-y-2"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="p-4 bg-gradient-to-l from-blue-500 via-purple-600 to-red-500 dark:bg-gradient-to-l dark:from-blue-700 dark:via-purple-800 dark:to-red-700 rounded-full text-white"
                  >
                    {tool.icon}
                  </motion.div>
                  <span
                    className={`text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-8 md:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-lg shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-white" : "text-gray-900"
                } mb-6`}
              >
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span
                        className={`text-gray-700 ${
                          darkMode ? "text-white/60" : ""
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span
                        className={`text-gray-600 ${
                          darkMode ? "text-gray-400" : ""
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-2 rounded-full ${
                          darkMode ? "bg-blue-500" : "bg-blue-600"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
