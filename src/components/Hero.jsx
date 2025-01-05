import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Download, Mail } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const { darkMode } = useTheme();

  const name = "Shahariar Mithu";

  const containerVariants = {
    visible: () => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        repeat: Infinity,
        repeatType: "loop",
        delayChildren: 0.5,
      },
    }),
  };

  const characterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className={`text-4xl font-bold ${
                darkMode ? "text-gray-200" : "text-gray-900"
              } mb-4`}
            >
              Hi, I`m{" "}
              <motion.span
                className="text-blue-600 inline-flex"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {name.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    variants={characterVariants}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
            </h2>
            <h1
              className={`text-2xl md:text-3xl font-semibold bg-clip-text text-transparent ${
                darkMode
                  ? "bg-gradient-to-r from-gray-400 via-yellow-500 to-purple-500"
                  : "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
              } mb-6`}
            >
              <i>Fullstack Developer</i> | Web Enthusiast
            </h1>
            <p
              className={`text-gray-600 text-lg ${
                darkMode ? "text-white/50" : "text-gray-600"
              } mb-8`}
            >
              <i>
                Passionate about creating beautiful and functional web
                experiences with the latest technologies.
              </i>
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                className={`inline-flex items-center px-6 py-3 ${
                  darkMode ? "bg-blue-600" : "bg-blue-600"
                } text-white rounded-lg hover:bg-blue-700 transition-colors`}
                download
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className={`inline-flex items-center px-6 py-3 text-blue-600 rounded-lg border-2 border-transparent hover:bg-blue-200 transition-colors`}
                style={{
                  borderImage:
                    "linear-gradient(to right, #3b82f6, #6366f1, #8b5cf6) 1",
                }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </motion.a>
            </div>

            <div className="flex space-x-4">
              <motion.a
                whileHover={{ y: -3 }}
                href="https://github.com/MITHU9"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center p-3 border-2 border-transparent rounded-full hover:text-blue-500 transition-colors  ${
                  darkMode ? "text-blue-50" : "text-gray-800"
                } `}
                style={{
                  borderImage:
                    "linear-gradient(to right, #3b82f6, #6366f1, #8b5cf6) 1", // Gradient border
                }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.linkedin.com/in/shahariar-mithu-31a5601b6/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center p-3 border-2 border-transparent rounded-full hover:text-blue-500 transition-colors  ${
                  darkMode ? "text-blue-50" : "text-gray-800"
                } `}
                style={{
                  borderImage:
                    "linear-gradient(to right, #3b82f6, #6366f1, #8b5cf6) 1",
                }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://x.com/MithuShahariar"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center p-3 border-2 border-transparent rounded-full hover:text-blue-500 transition-colors  ${
                  darkMode ? "text-blue-50" : "text-gray-800"
                } `}
                style={{
                  borderImage:
                    "linear-gradient(to right, #3b82f6, #6366f1, #8b5cf6) 1",
                }}
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-full aspect-square rounded-full overflow-hidden shadow-xl">
              <img
                src="/hero-img2.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
