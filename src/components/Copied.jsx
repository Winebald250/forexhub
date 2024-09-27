import React, { useState } from "react";

const Copied = ({ value, copy }) => {
  const [copied, setCopied] = useState(false);
  //   Copy To Clipboard
  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      })
      .catch((err) => {
        console.error("Faled to copy to clipboard: ", err);
      });
  };
  return (
    <>
      <span
        className="p-1 rounded border text-xs shadow active:shadow-none h-fit"
        onClick={() => handleCopy(value)}
      >
        {copied ? (
          <span className="text-green-500">copied</span>
        ) : (
          <span className="text-nowrap cursor-pointer">{copy}</span>
        )}
      </span>
    </>
  );
};

export default Copied;
