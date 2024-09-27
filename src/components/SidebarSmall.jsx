import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { FormContext } from "../App";
import useInView from "../useInView";
import { FaTimes } from "react-icons/fa";

const SidebarSmall = () => {
  const {
    isFormVisible,
    setIsFormVisible,
    theme,
    toggleTheme,
    setIsOpen,
    isOpen,
  } = useContext(FormContext);
  const openForm = () => setIsFormVisible(true);
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isOpen ? { opacity: 1, x: 0 } : {}}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="w-[100%] bg-black/50 top-0 left-0 h-screen fixed z-[99]"
        >
          <p
            className="absolute top-1 right-3 cursor-pointer rounded-full hover:bg-slate-800 text-slate-200 transition-all duration-300"
            onClick={toggleMenu}
          >
            <FaTimes className="w-7 h-7" />
          </p>
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                className={`w-[80%] !opacity-100 z-[999] ${
                  theme === "dark"
                    ? "!text-slate-200 bg-blue-950"
                    : "bg-white text-slate-800"
                } shadow-2xl h-full`}
                initial={{ opacity: 0, x: -300 }}
                animate={isOpen ? { opacity: 1, x: 0 } : {}}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className={`text-gray-700 hover:text-blue-500 active:text-blue-500 block py-3 hover:bg-slate-100 active:bg-slate-100 transition-all duration-300 px-4 md:inline-block md:mt-0 font-bold text-xl cursor-pointer ${
                    theme === "dark" && "text-slate-200"
                  }`}
                  onClick={toggleMenu}
                >
                  Jamal Forex Hub
                </Link>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className={`text-gray-700 hover:text-blue-500 active:text-blue-500 block py-2 hover:bg-slate-100 active:bg-slate-100 transition-all duration-300 px-4 md:inline-block md:mt-0 border-t cursor-pointer ${
                    theme === "dark" && "text-slate-200"
                  }`}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  to="features"
                  smooth={true}
                  duration={500}
                  className={`text-gray-700 hover:text-blue-500 active:text-blue-500 block py-2 hover:bg-slate-100 active:bg-slate-100 transition-all duration-300 px-4 md:inline-block md:mt-0 cursor-pointer ${
                    theme === "dark" && "text-slate-200"
                  }`}
                  onClick={toggleMenu}
                >
                  Features
                </Link>
                <Link
                  to="pricing"
                  smooth={true}
                  duration={500}
                  className={`text-gray-700 hover:text-blue-500 active:text-blue-500 block py-2 hover:bg-slate-100 active:bg-slate-100 transition-all duration-300 px-4 md:inline-block md:mt-0 cursor-pointer ${
                    theme === "dark" && "text-slate-200"
                  }`}
                  onClick={toggleMenu}
                >
                  Pricing
                </Link>
                <Link
                  to="testimonials"
                  smooth={true}
                  duration={500}
                  className={`text-gray-700 hover:text-blue-500 active:text-blue-500 block py-2 hover:bg-slate-100 active:bg-slate-100 transition-all duration-300 px-4 md:inline-block md:mt-0 cursor-pointer ${
                    theme === "dark" && "text-slate-200"
                  }`}
                  onClick={toggleMenu}
                >
                  Testimonials
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className={`text-gray-700 hover:text-blue-500 active:text-blue-500 block py-2 hover:bg-slate-100 active:bg-slate-100 transition-all duration-300 px-4 md:inline-block md:mt-0 border-b cursor-pointer  ${
                    theme === "dark" && "text-slate-200"
                  }`}
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
                <motion.a
                  href="#signup"
                  onClick={openForm}
                  className="text-white bg-[#071F7E] hover:bg-[#031663] px-4 py-2 mt-4 w-[80%] rounded mx-auto block md:hidden text-center shadow-2xl outline-double  outline-[#0000f1]"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Get Started
                </motion.a>

                {/* Theme Toggle Button */}
                <div className="flex flex-col my-20 mx-4">
                  <span>Toggle Theme To</span>
                  <button
                    onClick={toggleTheme}
                    className={`my-2 w-fit py-2 px-8 rounded ${
                      theme === "dark"
                        ? "bg-white text-[#040d2e] border border-[#040d2e] outline outline-offset-1 outline-white"
                        : "bg-[#040d2e] text-white outline outline-offset-1 outline-[#040d2e]/70 border border-[#040d2e]/70 rounded"
                    }`}
                  >
                    {theme === "dark" ? "Light Theme" : "Dark Theme"}
                  </button>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SidebarSmall;
