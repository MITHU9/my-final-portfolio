import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useRef } from "react";

const paragraph = `Hello! I'm a passionate MERN Stack Developer with a keen eye for building scalable,high-performance web applications. With expertise in MongoDB,Express.js,React,and Node.js,I specialize in crafting intuitive,responsive,and dynamic user experiences. I thrive on solving complex problems and transforming ideas into functional,efficient,and elegant digital solutions. My experience spans across full-stack development,RESTful APIs,database design,and cloud deployments,ensuring seamless end-to-end application performance.I specialize in building responsive web applications using modern technologies like React,TypeScript,and Tailwind CSS. I love solving complex problems and turning ideas into reality through code.When I'm not coding,you can find me exploring new technologies,contributing to open-source projects,or sharing my knowledge through blog posts and mentoring.`;

export default function About({ scrollY }) {
  const { darkMode } = useTheme();
  const element = useRef(null);

  const scale = useTransform(scrollY, [0, 0.5], [0.8, 1]);
  const rotate = useTransform(scrollY, [0, 0.5], [10, 0]);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");

  return (
    <motion.section
      id="about"
      style={
        window.innerWidth >= 768
          ? {
              scale,
              rotate,
            }
          : ""
      }
      className={`py-20 opacity-100 md:h-screen md:mt-8 md:sticky md:top-0 ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
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
              darkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            About Me
          </h2>
          <div
            className={`mt-2 h-1 w-20 bg-blue-600 mx-auto ${
              darkMode ? "bg-blue-400" : "bg-blue-600"
            }`}
          ></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/about_image.webp"
              alt="Working"
              className="rounded-lg lg:h-[60vh] shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 lg:h-[60vh]"
          >
            <p
              ref={element}
              className={`text-gray-600 flex flex-wrap text-[18px] ${
                darkMode ? "text-white/70" : "text-gray-300"
              }`}
            >
              {words.map((word, index) => {
                const start = index / words.length;
                const end = start + 1 / words.length;

                return (
                  <Word
                    key={index}
                    range={[start, end]}
                    progress={scrollYProgress}
                  >
                    {word}{" "}
                  </Word>
                );
              })}
            </p>

            <div className="pt-4">
              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-gray-200" : "text-gray-900"
                } mb-4`}
              >
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4
                    className={`font-medium ${
                      darkMode ? "text-gray-200" : "text-gray-900"
                    }`}
                  >
                    B.Sc. Engineering in Computer Science Engineering(CSE)
                  </h4>
                  <p
                    className={`text-gray-600 ${
                      darkMode ? "text-white/50" : "text-gray-600"
                    }`}
                  >
                    Pabna University of Science And Technology • 2020 - 2025
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mr-[4px]">
      <span className="absolute text-left font-semibold opacity-30">
        {children}
        &nbsp;
      </span>
      <motion.span style={{ opacity }} className="text-gray-400 font-semibold">
        {children}{" "}
      </motion.span>
    </span>
  );
};
