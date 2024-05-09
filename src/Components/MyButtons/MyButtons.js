import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import "./MyButtons.css";

const MyButtonLg = ({ children, style, className, action }) => {
  return (
    <button
      onClick={action}
      className={`MyButtonLg shadow-lg  ${className}`}
      style={style}
    >
      {children}
      <span>
        {" "}
      </span>
    </button>
  );
};

export { MyButtonLg };
