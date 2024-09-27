import React from "react";
import { motion } from "framer-motion";
import useInView from "../useInView";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import footer from "../assets/footer.gif";

const Footer = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <motion.footer
      ref={ref}
      className="bg-gray-800 pt-8 text-sm text-white relative"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-full absolute top-0"
      >
        <img
          src={footer}
          alt="Footer Image"
          className="md:w-[400px] md:h-[400px] w-[200px] h-[200px] ml-auto"
        />
      </motion.div>
      <motion.div
        className="container mx-auto px-4 z-10 relative"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {/* Quick Links */}
        <motion.div
          className="flex flex-wrap justify-between mb-8 md:w-1/2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li>
                <a href="#home" className="hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-blue-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-blue-400">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col md:items-center gap-2 md:border-b">
            <h2 className="text-xl font-bold ">Jamal Forex Hub</h2>

            <p className="font-semibold mb-2">Home of young millionaires.</p>

            <div className="flex items-center gap-2">
              <span className="p-2 rounded  bg-[#071F7E] hover:bg-[#031663] outline border border-black outline-offset outline-blue-300 hover:outline-blue-500 text-white cursor-pointer">
                Buy Courses
              </span>
              <span className="p-2 rounded  bg-[#071F7E] hover:bg-[#031663] outline border border-black outline-offset outline-blue-300 hover:outline-blue-500 text-white cursor-pointer">
                Buy Products
              </span>
            </div>
          </div>
        </motion.div>

        {/* Company Contact Details */}
        <motion.div
          className="flex flex-wrap justify-between mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p>Email: jamalforexhub@gmail.com</p>
            <p>Phone: +234 7040876440</p>
            <p>Address: Apo Sunrise Gudu, Abuja</p>
          </div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>
      <div className="flex flex-col mx-auto w-full py-3 text-center text-sm border-t mt-2">
        <span>All Rights Reserved</span>
        <span>Winebald Forex Hub © {new Date().getFullYear()}</span>
      </div>
    </motion.footer>
  );
};

export default Footer;
