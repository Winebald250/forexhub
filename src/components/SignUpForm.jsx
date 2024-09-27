import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaInfo } from "react-icons/fa6";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignUpForm = ({ isVisible, onClose, theme }) => {
  const [success, setSuccess] = useState(false);
  const [valid, setValid] = useState(true);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    location: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, whatsapp: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.whatsapp ||
      !formData.location ||
      !formData.experience
    ) {
      setError(true);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xaygjagd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully:", formData);
        setFormData({ name: "", whatsapp: "", location: "", experience: "" });
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        console.error("Form submission failed:", response);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  // Clear error when form data changes
  useEffect(() => {
    if (error) {
      setError(false);
    }
  }, [formData]);

  return (
    <motion.div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[999] h-screen ${
        isVisible ? "block" : "hidden"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={`p-6 rounded-lg shadow-lg w-full max-w-md mx-auto relative ${
          theme === "dark" ? "bg-[#01018b] text-gray-300" : "bg-white"
        }`}
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {success && (
          <p className="text-center text-sm text-green-500 w-[90%]">
            Details submitted successfully, you will be contacted shortly.
          </p>
        )}

        {error && (
          <p className="text-sm text-rose-500 w-[90%] text-center">
            All fields are required!
          </p>
        )}
        <button
          className="absolute top-0 right-0 mt-4 mr-4 text-3xl text-rose-500 cursor-pointer"
          onClick={onClose}
        >
          &times;
        </button>
        <FaInfo className="w-52 h-52 opacity-30 text-blue-500 absolute bottom-0 right-0 -rotate-12" />
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className="z-[999]">
          <div className="mb-4">
            <label
              className={`${
                theme === "dark"
                  ? "text-slate-200"
                  : "block text-gray-700 text-left"
              }`}
              htmlFor="name"
            >
              Name
            </label>
            <input
              className={`w-full px-3 py-2 border-2 rounded-lg outline-none ${
                theme === "dark"
                  ? "text-gray-300 bg-[#040d2e] border-[#040d2e]"
                  : "text-black"
              }`}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className={`${
                theme === "dark"
                  ? "text-slate-200"
                  : "block text-gray-700 text-left"
              }`}
              htmlFor="whatsapp"
            >
              WhatsApp Number
            </label>
            <div
              className={`w-full border-2 rounded-lg outline-none ${
                theme === "dark"
                  ? "text-gray-300 bg-[#040d2e] border-[#040d2e]"
                  : "text-black"
              }`}
            >
              <PhoneInput
                country={"ng"}
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                  width: "100%",
                }}
                enableSearch={true}
                searchPlaceholder="Search Country"
                searchNotFound="No entry found"
                autocompleteSearch={true}
                inputStyle={{
                  border: "none",
                  backgroundColor: "inherit",
                  width: "100%",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                }}
                containerStyle={{
                  border: "none",
                  width: "100%",
                }}
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handlePhoneChange}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className={`${
                theme === "dark"
                  ? "text-slate-200"
                  : "block text-gray-700 text-left"
              }`}
              htmlFor="location"
            >
              Location
            </label>
            <input
              className={`w-full px-3 py-2 border-2 rounded-lg outline-none ${
                theme === "dark"
                  ? "text-gray-300 bg-[#040d2e] border-[#040d2e]"
                  : "text-black"
              }`}
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className={`${
                theme === "dark"
                  ? "text-slate-200"
                  : "block text-gray-700 text-left"
              }`}
              htmlFor="experience"
            >
              Trading Experience Level
            </label>
            <select
              className={`w-full px-3 py-2 border-2 rounded-lg outline-none ${
                theme === "dark"
                  ? "text-gray-300 bg-[#040d2e] border-[#040d2e]"
                  : "text-black"
              }`}
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            >
              <option value="">Select...</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-[#071F7E] hover:bg-[#031663] outline border border-black outline-offset-2 outline-blue-300 hover:outline-blue-500 text-white px-4 py-2 rounded transition-all duration-300"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Upon successful submission, our support will contact you via WhatsApp
          within 24 hours to plug you in rightly.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SignUpForm;
