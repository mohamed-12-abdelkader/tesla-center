import React from "react";

const Button = ({
  children,
  type = "primary",
  size = "normal",
  icone = false,
  block = false,
  ...props
}) => {
  // type: primary success error
  // size: small normal large
  return (
    <button
      className={`btn btn-${type} btn-${size} ${icone ? "btn-icon" : ""} ${
        block ? "btn-block" : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
