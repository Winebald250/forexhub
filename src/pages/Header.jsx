import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useInView from "../useInView";
import { Link } from "react-scroll";
import logo from "../assets/Candlestick.gif";
import { FormContext } from "../App";

const Header = () => {
  const [active, setActive] = useState("Home");
  const {
    isFormVisible,
    setIsFormVisible,
    theme,
    toggleTheme,
    setIsOpen,
    isOpen,
  } = useContext(FormContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [ref, isInView] = useInView({ threshold: 0.1 });

  const openForm = () => setIsFormVisible(true);

  return (
    <motion.header
      ref={ref}
      className={`sticky top-0 z-50 shadow-md pb-2 md:pb-0 ${
        theme === "dark"
          ? "bg-[#01018b] border-b text-slate-200"
          : "bg-white text-slate-800"
      }`}
      // initial={{ opacity: 0, y: -50 }}
      // animate={isInView ? { opacity: 1, y: 0 } : {}}
      // transition={{ duration: 0.5 }}
    >
      <div className="px-4 md:py-2 py-2 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}
          className="text-xl font-bold flex items-center"
        >
          <img src={logo} alt="Logo" className="w-10 h-7" />
          JFH
        </motion.div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`focus:outline-none ${
              theme === "dark" ? "text-slate-200" : "text-gray-700"
            }`}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Menu Large */}
        <nav className={`md:flex space-x-6 hidden`}>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className={`text-[#071F7E] hover:text-[#031663] ${
              theme === "dark" && "!text-slate-200"
            } block mt-4 md:inline-block md:mt-0 header transition-all duration-300 ${
              active === "Home" ? "bg-[#0000f1]/20 text-[#0000f1]" : ""
            } px-2 py-1 rounded hover:bg-[#0000f1]/20 cursor-pointer`}
            onClick={() => setActive("Home")}
          >
            Home
          </Link>
          <Link
            to="features"
            smooth={true}
            duration={500}
            className={`text-[#071F7E] hover:text-[#031663] ${
              theme === "dark" && "!text-slate-200"
            } block mt-4 md:inline-block md:mt-0 header transition-all duration-300 ${
              active === "Features" ? "bg-[#0000f1]/20 text-[#0000f1]" : ""
            } px-2 py-1 rounded hover:bg-[#0000f1]/20 cursor-pointer`}
            onClick={() => setActive("Features")}
          >
            Features
          </Link>
          <Link
            to="pricing"
            smooth={true}
            duration={500}
            className={`text-[#071F7E] hover:text-[#031663] ${
              theme === "dark" && "!text-slate-200"
            } block mt-4 md:inline-block md:mt-0 header transition-all duration-300 ${
              active === "Pricing" ? "bg-[#0000f1]/20 text-[#0000f1]" : ""
            } px-2 py-1 rounded hover:bg-[#0000f1]/20 cursor-pointer`}
            onClick={() => setActive("Pricing")}
          >
            Pricing
          </Link>
          <Link
            to="testimonials"
            smooth={true}
            duration={500}
            className={`text-[#071F7E] hover:text-[#031663] ${
              theme === "dark" && "!text-slate-200"
            } block mt-4 md:inline-block md:mt-0 header transition-all duration-300 ${
              active === "Testimonials" ? "bg-[#0000f1]/20 text-[#0000f1]" : ""
            } px-2 py-1 rounded hover:bg-[#0000f1]/20 cursor-pointer`}
            onClick={() => setActive("Testimonials")}
          >
            Testimonials
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={`text-[#071F7E] hover:text-[#031663] ${
              theme === "dark" && "!text-slate-200"
            } block mt-4 md:inline-block md:mt-0 header transition-all duration-300 ${
              active === "Contact" ? "bg-[#0000f1]/20 text-[#0000f1]" : ""
            } px-2 py-1 rounded hover:bg-[#0000f1]/20 cursor-pointer`}
            onClick={() => setActive("Contact")}
          >
            Contact
          </Link>
        </nav>

        {/* Call to Action Button */}
        <AnimatePresence>
          <motion.a
            href="#signup"
            onClick={openForm}
            className="bg-[#071F7E] hover:bg-[#031663] text-white px-4 py-2 rounded hidden md:inline-block outline border border-black outline-offset-2 outline-blue-300 hover:outline-blue-500"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Get Started
          </motion.a>
        </AnimatePresence>
      </div>
      <motion.a
        href="#signup"
        onClick={openForm}
        className="text-white  bg-[#071F7E] hover:bg-[#031663] outline border border-black outline-offset-2 outline-blue-300 hover:outline-blue-500 px-4 py-2 block md:hidden text-center shadow-2xl w-[95%] mx-auto rounded"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Get Started
      </motion.a>
    </motion.header>
  );
};

export default Header;
