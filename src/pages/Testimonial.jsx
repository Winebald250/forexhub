import React, { useContext } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import useInView from "../useInView";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import user from "../assets/user.jpg";
import { FaRegBell } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa6";
import { FormContext } from "../App";

const testimonials = [
  {
    picture:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvcmV4fGVufDB8fDB8fHww",
    name: "Zaccky",
    text: "This platform has revolutionized my trading experience. The real-time data and analytics are top-notch.",
  },
  {
    picture: user,
    name: "El Tio",
    text: "The custom alerts feature is a game-changer. I never miss an important trading opportunity.",
  },
  {
    picture:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvcmV4fGVufDB8fDB8fHww",
    name: "Gad FX",
    text: "I love the 24/7 support and the advanced analytics. It has helped me make more informed trading decisions.",
  },
];

const Testimonials = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const { theme } = useContext(FormContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <motion.section
      ref={ref}
      className={`py-16 relative overflow-hidden ${
        theme === "dark" ? "bg-[#040d2e]" : "bg-blue-100"
      }`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      id="testimonials"
    >
      <FaMicrophone className="w-52 h-52 opacity-30 text-blue-500 absolute top-0 left-0 -rotate-12 contact" />
      <FaRegBell className="w-36 h-36 opacity-30 text-blue-500 absolute bottom-0 right-0 rotate-12 contact" />
      <div className="container mx-auto px-4 text-center">
        {/* Section Introduction */}
        <motion.h2
          className={`text-2xl md:text-4xl font-bold mb-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say
        </motion.h2>

        {/* Testimonials Carousel */}
        <Slider {...settings} className="lg:max-w-[50%] mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${
                theme === "dark" ? "bg-[#031663] text-gray-300" : "bg-white"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={
                  testimonial.picture ||
                  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvcmV4fGVufDB8fDB8fHww"
                }
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3
                className={`text-xl font-semibold mb-2 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                {testimonial.name}
              </h3>
              <p
                className={theme === "dark" ? "text-gray-300" : "text-gray-700"}
              >
                {testimonial.text}
              </p>
            </motion.div>
          ))}
        </Slider>
      </div>
    </motion.section>
  );
};

export default Testimonials;
