import React, { useContext } from "react";
import { motion } from "framer-motion";
import useInView from "../useInView";
import { FaNairaSign } from "react-icons/fa6";
import { FormContext } from "../App";

const features = [
  {
    icon: "📊", // You can replace this with an actual image path
    title: "Real-time Data",
    description:
      "Access real-time forex data to make informed trading decisions.",
  },
  {
    icon: "🕒", // You can replace this with an actual image path
    title: "24/7 Support",
    description:
      "Get support whenever you need it with our 24/7 customer service.",
  },
  {
    icon: "📈", // You can replace this with an actual image path
    title: "Advanced Analytics",
    description:
      "Utilize advanced analytics to identify trading opportunities and trends.",
  },
  {
    icon: "🕒", // You can replace this with an actual image path
    title: "Daily Signals",
    description:
      "You'd get access to our VIP guaranteed 80% success rate signal.",
  },
];

const Features = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const { theme } = useContext(FormContext);

  return (
    <motion.section
      ref={ref}
      className={`py-16 overflow-hidden relative ${
        theme === "dark" ? "bg-[#031663]" : "bg-gray-100"
      }`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      id="features"
    >
      <div className="container mx-auto px-4 text-center">
        <FaNairaSign className="w-52 h-52 opacity-10 text-blue-500 absolute top-0 left-0 -rotate-12" />
        <FaNairaSign className="w-60 h-60 opacity-30 text-blue-500 absolute bottom-0 right-0 -rotate-12" />
        {/* Section Introduction */}
        <motion.h2
          className={`text-2xl md:text-4xl font-bold mb-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Key Features
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`transition-all duration-300 p-6 rounded-lg shadow-lg cursor-default ${
                theme === "dark"
                  ? "bg-[#040d2e] hover:text-white text-gray-300 hover:bg-[#040d2e]"
                  : "bg-white hover:text-white text-gray-700 hover:bg-[#031663]"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p
                className={`${
                  theme === "dark"
                    ? "text-gray-300 group-hover:text-slate-200"
                    : "group-hover:text-slate-200"
                }`}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
