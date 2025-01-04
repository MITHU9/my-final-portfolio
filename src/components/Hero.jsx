import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Download, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hi, I`m <span className="text-blue-600">Shahariar Mithu</span>
            </h2>
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
              Frontend Developer | Web Enthusiast
            </h1>
            <p className="text-gray-600 mb-8">
              Passionate about creating beautiful and functional web experiences
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                download
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
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
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.linkedin.com/in/shahariar-mithu-31a5601b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://x.com/MithuShahariar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
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
