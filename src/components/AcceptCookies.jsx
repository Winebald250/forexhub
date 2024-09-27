// CookieConsent.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    setShow(false);
    // Add any other logic for accepting cookies
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="cookie-consent outline outline-slate-400 outline-offset-1"
        >
          <div className="cookie-content">
            <div className="full flex justify-between">
              <p className="w-[90%]">
                We use cookies to improve your experience, security, and other
                business use. By clicking "Accept", you agree to the use of
                cookies.
              </p>
              <p className="rounded-full hover:bg-[#3939ff] cursor-pointer h-fit transition-all duration-300">
                <FaTimes
                  className="w-6 h-6 text-slate-200"
                  onClick={handleAccept}
                />
              </p>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <button
                className="btnA rounded w-[90%] mx-auto outline outline-offset-2 font-medium"
                onClick={handleAccept}
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
