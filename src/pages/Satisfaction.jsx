import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import useInView from "../useInView";

const Satisfaction = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      className="relative bg-cover bg-center h-auto text-white flex items-center justify-center md:py-8 py-4"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1712237051567-b86cffac7b36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fExpbmVzJTIwb2Y2h8fHx8fHww%3D%3D")',
      }}
    >
      <div className="absolute inset-0 bg-[#040d2e] opacity-50"></div>
      <motion.div ref={ref} className="relative z-10 text-center p-6 max-w-3xl">
        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
        >
          Our Students
        </motion.h2>
        <motion.p
          className="md:text-xl mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Number of people whose success keeps us going.
        </motion.p>
        <motion.div
          className="text-6xl font-extrabold"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
          }
          transition={{ duration: 1, delay: 0 }}
        >
          {isInView && (
            <CountUp start={0} end={784} delay={0} duration={3}>
              {({ countUpRef }) => (
                <div className="text-[#388eff]">
                  <span className="text-white mr-2">+</span>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
          )}
        </motion.div>
        <motion.p
          className="md:text-xl mt-4"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 3 }}
        >
          and counting...
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Satisfaction;
