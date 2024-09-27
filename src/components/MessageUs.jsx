import React, { useContext, useState } from "react";
import { FaGear, FaRegBell } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { FormContext } from "../App";

const MessageUs = () => {
  const { theme, toggleTheme } = useContext(FormContext);
  const [chat, setChat] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed top-[50%] left-0 z-50 border-y border-r bg-[#010e42] border-white text-white rounded-r-[8px] flex items-center shadow-lg cursor-pointer overflow-hidden pr-1"
    >
      {chat ? (
        <span className="p-4" onClick={() => setChat(false)}>
          <FaTimes className="text-rose-500  w-5 h-5" />
        </span>
      ) : (
        <span
          onClick={() => setChat(true)}
          className="p-4 relative overflow-hidden"
        >
          <FaGear className="w-5 h-5 contact" />
        </span>
      )}
      {chat && (
        <AnimatePresence>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, x: 50 }}
          >
            <button
              onClick={toggleTheme}
              className={`w-fit py-2 px-8 rounded ${
                theme === "dark"
                  ? "bg-white text-[#040d2e] border border-[#040d2e] outline outline-offset-1 outline-white"
                  : "bg-[#040d2e] text-white outline outline-offset-1 outline-white border border-[#040d2e]/70 rounded"
              }`}
            >
              {theme === "dark" ? "Light Theme" : "Dark Theme"}
            </button>
          </motion.p>
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default MessageUs;
