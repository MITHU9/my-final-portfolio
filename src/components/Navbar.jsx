import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FiHome, FiUser, FiCode, FiFolder, FiMail } from "react-icons/fi";
import { Moon, Sun, Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", to: "home", icon: <FiHome size={20} /> },
  { name: "About", to: "about", icon: <FiUser size={20} /> },
  { name: "Skills", to: "skills", icon: <FiCode size={20} /> },
  { name: "Projects", to: "projects", icon: <FiFolder size={20} /> },
  { name: "Contact", to: "contact", icon: <FiMail size={20} /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const [active, setActive] = useState("Home");

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
        scrolled ? " shadow-lg" : " "
      } ${darkMode ? "text-white bg-gray-800" : " text-black "}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative flex-shrink-0 font-bold text-2xl"
          >
            {/* Animated Gradient Border */}
            <div className="absolute inset-[-1px] rounded-lg bg-gradient-to-r from-red-700 via-yellow-600 to-pink-950 animate-gradientMove"></div>

            {/* Inner Text */}
            <div className="relative bg-white dark:bg-black px-4 py-2 rounded-lg">
              <span className="bg-clip-text text-transparent bg-gradient-to-r text-2xl from-red-500 via-blue-500 to-yellow-600">
                <i>SM</i>
              </span>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex-1 md:flex justify-center items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  onClick={() => setActive(item.name)}
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active"
                  className={`cursor-pointer px-4 py-2 flex items-center space-x-2 rounded-md text-sm font-medium transition-colors relative group ${
                    active === item.name
                      ? "text-blue-600"
                      : "text-gray-500 dark:text-gray-300"
                  }`}
                >
                  <span className="group-hover:text-blue-600 group-active:text-blue-600">
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                  {
                    // Active Indicator
                    active === item.name ? (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 scale-x-100 transition-transform origin-left"></span>
                    ) : (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    )
                  }
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
                className={`inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none ${
                  darkMode ? "text-white" : "text-black"
                }`}
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
          className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg ${
            darkMode && isOpen
              ? "bg-slate-800 text-white"
              : "bg-white text-black"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              className="cursor-pointer px-3 py-2 flex items-center space-x-2 rounded-md text-base font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
