import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled && darkMode
          ? "bg-slate-800 "
          : "text-white bg-slate-700 shadow-lg"
      } ${darkMode ? "bg-slate-800 text-white" : "bg-transparent text-black"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-shrink-0 font-bold text-2xl"
          >
            {/* Logo */}
            <motion.div
              className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-800 via-blue-600 to-gray-600 rounded-lg shadow-lg overflow-hidden"
              initial={{ scale: 0.8, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
            >
              {/* Background Circle Animation */}
              <motion.div
                className="absolute w-16 h-16 bg-white opacity-20 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>

              {/* SM Letters */}
              <motion.span
                className="text-white/90 font-extrabold text-lg"
                initial={{ y: -10 }}
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                SM
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Centered Menu (Desktop) */}
          <div className="hidden md:flex-1 md:flex justify-center items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Dark Mode Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="text-gray-500 dark:text-gray-300"
            >
              {darkMode ? (
                <Sun size={24} className="text-yellow-500" />
              ) : (
                <Moon size={24} className="text-gray-400" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none
                  ${darkMode ? "text-white" : "text-black"}`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        className="md:hidden"
      >
        <div
          className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg
          ${darkMode ? "bg-slate-800 text-white" : "bg-white text-black"}
          `}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer block px-3 py-2 rounded-md text-base font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
