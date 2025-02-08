import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import Button2 from "./button/Button2";
import Button3 from "./button/Button3";
import Social from "./social-icon/Social";

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
                text="Download Resume"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume_mithu10.pdf"
                download
              >
                <Button2 text={"Download Resume"}>
                  <Download className="w-5 h-5 mr-2" />
                </Button2>
              </motion.a>

              <motion.a
                text={"Contact Me"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="cursor-pointer"
              >
                <Button3 text={"Contact Me"}>
                  <Mail className="w-5 h-5 mr-2" />
                </Button3>
              </motion.a>
            </div>

            <div className="flex space-x-4">
              <Social />
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
