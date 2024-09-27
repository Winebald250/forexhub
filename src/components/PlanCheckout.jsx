import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import pricingPlansDb from "../db/pricingPlansDb";
import Copied from "./Copied";
import { motion } from "framer-motion";

const PlanCheckout = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [usdt, setUsdt] = useState(false);
  const [bank, setBank] = useState(false);
  const foundPrice = pricingPlansDb.find((plan) => {
    return plan.id == id;
  });
  useEffect(() => {}, []);

  return (
    <div className="p-2 h-screen bg-white">
      <p
        className="py-1 px-3 rounded border my-2 w-fit text-sm cursor-pointer"
        onClick={() => navigate(-1)}
      >
        {"<"} Back
      </p>
      <motion.div
        transition={{ duration: 0.5 }}
        className="container mx-auto p-4 md:max-w-[600px] border rounded shadow flex flex-col gap-2 bg-gray-50"
      >
        <p className="text-green-500 text-sm poppins-regular">
          Congratulations in advance on the decision you're about to make.
        </p>
        <p className="poppins-bold text-lg">Plan: {foundPrice.name}</p>
        <p className="poppins-semibold">
          Price: {foundPrice.price}{" "}
          <span className="text-sm poppins-regular">
            ( ₦{" "}
            {foundPrice.price
              .split("$")
              .join("")
              .split("/")
              .join("")
              .split("month")[0] * 1300}{" "}
            @ ₦1,300 rate)
          </span>
        </p>

        <ul className="poppins-medium">
          Features:{" "}
          {foundPrice.features.map((feature, index) => (
            <li key={index} className="poppins-regular text-sm">
              -{feature}
            </li>
          ))}
        </ul>

        <span className="poppins-medium">Payment Options:</span>
        <motion.ul
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-2"
        >
          <li
            className="bg-[#071F7E] text-white px-4 py-2 md:py-3 rounded hover:bg-[#031663] shadow-lg shadow-black/30 text-center active:scale-95 z-10 poppins-regular cursor-pointer"
            onClick={() => setUsdt(!usdt)}
          >
            {usdt ? "Close" : "USDT"}
          </li>
          {usdt && <span className="text-xs mt-2 px-2">Send only USDT</span>}
          {usdt && (
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 my-2 justify-between bg-white"
            >
              <span className="border-2 rounded px-2 overflow-auto text-nowrap border-slate-100 shadow-inner">
                jsdnjvbhsdbvbsdbvhsdhvsudbvsdvahsdNJNSjJNJNjnj
              </span>
              <Copied
                value="jsdnjvbhsdbvbsdbvhsdhvsudbvsdvahsdNJNSjJNJNjnj"
                copy={"copy"}
              />
            </motion.p>
          )}
          <li
            className="bg-[#071F7E] text-white px-4 py-2 md:py-3 rounded hover:bg-[#031663] shadow-lg shadow-black/30 text-center active:scale-95 z-10 poppins-regular cursor-pointer"
            onClick={() => setBank(!bank)}
          >
            {bank ? "Close" : "Bank Transfer"}
          </li>
          {bank && (
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-top justify-between gap-2 mt-2 border p-2 bg-white"
            >
              <span className="flex flex-col gap-2">
                <span>1234567890</span>
                <span>Kuda MFB</span>
                <span>Jamal Forex Hub Ltd</span>
              </span>
              <Copied value="1234567890" copy={"copy account"} />
            </motion.p>
          )}
        </motion.ul>
      </motion.div>

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col text-center text-sm text-slate-700 mt-6 border p-2 md:px-8 md:w-fit mx-auto"
      >
        <p>
          For enquiries, questions and sending proof of payment contact -
          Support via
        </p>
        <code>07040876440</code>
        <p className="flex items-center mx-auto gap-2 mt-2">
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            className="p-2 text-center rounded bg-green-500 text-white shadow-lg active:scale-95 cursor-pointer"
          >
            WhatsApp
          </a>
          <a
            href="tel:+2347040876440"
            className="p-2 text-center rounded bg-blue-500 text-white shadow-lg active:scale-95 cursor-pointer"
          >
            Phone
          </a>
          <a
            href="tel:+2347040876440"
            className="p-2 text-center rounded bg-black text-white shadow-lg active:scale-95 cursor-pointer"
          >
            Message
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default PlanCheckout;
