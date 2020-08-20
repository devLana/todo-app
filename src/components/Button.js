import React from "react";

const Button = ({ className, onClick, title, children }) => {
  return (
    <>
      {title ? (
        <button className={className} onClick={onClick} title={title}>
          {children}
        </button>
      ) : (
        <button className={className} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
