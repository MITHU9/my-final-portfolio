import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex space-x-6 mb-6"
          >
            <a
              href="https://github.com/MITHU9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/shahariar-mithu-31a5601b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/MithuShahariar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            © {new Date().getFullYear()} Shahariar Mithu. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
