import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useInView from "../useInView";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import axios from "axios";
import { FormContext } from "../App";

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { theme } = useContext(FormContext);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fname.trim() || !email.trim() || !msg.trim()) {
      setErr("All fields are required!");
      return;
    }

    if (!validateEmail(email)) {
      setEmailErr("Valid email required!");
      return;
    }

    setLoading(true);

    try {
      await axios.post("https://formspree.io/f/xaygjagd", {
        name: fname,
        email: email,
        message: msg,
      });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
      setEmail("");
      setFname("");
      setMsg("");
    } catch (error) {
      setErr(
        "There was an error sending your message. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setErr("");
    if (email) {
      setEmailErr(validateEmail(email) ? "" : "Valid email required");
    }
  }, [fname, email, msg]);

  return (
    <motion.section
      ref={ref}
      className={`py-16 overflow-hidden relative ${
        theme === "dark" ? "bg-[#040d2e] text-gray-300" : "bg-white"
      }`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      id="contact"
    >
      <FaEnvelope
        className={`w-60 h-60 opacity-30 ${
          theme === "dark" ? "text-blue-500" : "text-blue-300"
        } absolute top-[50%] left-0 -rotate-12 hidden md:flex contact`}
      />
      <FaEnvelope
        className={`w-64 h-64 opacity-30 ${
          theme === "dark" ? "text-blue-500" : "text-blue-300"
        } absolute top-0 left-[50%] rotate-12 hidden md:flex`}
      />
      <FaEnvelope
        className={`w-28 h-28 opacity-30 ${
          theme === "dark" ? "text-blue-500" : "text-blue-300"
        } absolute top-[50%] right-0 -rotate-12`}
      />
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className={`text-2xl md:text-4xl font-bold mb-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {err && <span className="text-rose-500">{err}</span>}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {success && (
            <span className="text-green-500">
              Congratulations, your message has been sent
            </span>
          )}
        </motion.p>

        <motion.form
          className="max-w-xl mx-auto mb-8 z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className={`block text-left ${
                theme === "dark" ? "text-gray-300" : "text-slate-700"
              }`}
              htmlFor="name"
            >
              Name
            </label>
            <input
              className={`w-full px-3 py-2 border-2 rounded-lg outline-none ${
                theme === "dark"
                  ? "text-gray-300 bg-[#01018b] border-[#01018b]"
                  : "text-black"
              }`}
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className={`block text-left ${
                theme === "dark" ? "text-gray-300" : "text-slate-700"
              }`}
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`w-full px-3 py-2 border-2 rounded-lg outline-none ${
                theme === "dark"
                  ? "text-gray-300 bg-[#01018b] border-[#01018b]"
                  : "text-black"
              }`}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p className="text-rose-500 text-sm text-start">{emailErr}</p>
          </div>
          <div className="mb-4">
            <label
              className={`block text-left ${
                theme === "dark" ? "text-gray-300" : "text-slate-700"
              }`}
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className={`w-full px-3 py-2 border-2 rounded-lg outline-none resize-none ${
                theme === "dark"
                  ? "text-gray-300 bg-[#01018b] border-[#01018b]"
                  : "text-black"
              }`}
              id="message"
              name="message"
              rows="5"
              placeholder="Enter your message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className={`text-white px-4 py-2 rounded ${
              theme === "dark"
                ? "bg-blue-900 hover:bg-blue-800"
                : "bg-[#071F7E] hover:bg-[#031663]"
            } outline border border-black outline-offset-2 outline-blue-300 hover:outline-blue-500`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>Email: winebaldforexhub@gmail.com</p>
          <p>Phone: +250791829435</p>
          <p>Address: Kigali, Rwanda</p>
        </motion.div>

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
      </div>
    </motion.section>
  );
};

export default Contact;
