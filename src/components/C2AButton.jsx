import React from "react";

const C2AButton = ({ btnText, className = "" }) => {
  return (
    <a
      href="#request-quote"
      className={
        "bg-accent text-white px-4 py-2 rounded-lg font-primary font-medium text-sm hover:bg-orange-600 transition-colors inline-block " +
        className
      }
    >
      {btnText}
    </a>
  );
};

export default C2AButton;
