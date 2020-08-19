import React from "react";

const Button = ({ className, handler, title, children }) => {
  return (
    <button className={className} onClick={handler} title={title}>
      {children}
    </button>
  );
};

export default Button;
