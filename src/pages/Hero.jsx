import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import useInView from "../useInView";
import hero from "../assets/hero.png";
import LottieBackground from "../components/LottieBackground.jsx";
import LottieAnimation from "../components/LottieAnimation";
import SignUpForm from "../components/SignUpForm.jsx";
import { FormContext } from "../App.jsx";

const Hero = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const { isFormVisible, setIsFormVisible } = useContext(FormContext);

  const openForm = () => setIsFormVisible(true);

  return (
    <motion.section
      id="home"
      ref={ref}
      className="relative overflow-hidden bg-cover bg-center h-screen flex justify-center items-center pt-16 md:pt-0"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <LottieBackground />
      <div className="absolute inset-0 bg-gradient-to-t from-[#000414] to-[#010e42] opacity-90"></div>
      <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row pt-36 lg:pt-0 justify-center md:justify-start md:items-start lg:justify-center lg:items-center items-center text-white relative">
        {/* Left Content */}
        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Trade Forex with <br />{" "}
            <span className="text-purple-500">Confidence</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join thousands of traders leveraging our platform at - Jamal Forex
            Hub - for real-time data, advanced analytics and signals.
          </motion.p>

          {/* Call to Action Button */}
          <motion.a
            onClick={openForm}
            href="#signup"
            className="text-white px-8 text-nowrap md:px-16 py-3 rounded bg-[#071F7E] hover:bg-[#031663] outline border border-black outline-offset-2 outline-blue-300 hover:outline-blue-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Get Started
          </motion.a>
        </motion.div>

        {/* Right Lottie Animation */}
        <motion.div
          className="lg:w-1/2 mt-8 lg::mt-0"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {/* <LottieAnimation /> */}
          <img
            src={hero}
            alt="Hero Image"
            className="md:w-[600px] md:h-[600px]"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
