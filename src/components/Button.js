import React from "react";

const Button = ({ className, onClick, title, value }) => {
  return (
    <>
      {title ? (
        <button className={className} onClick={onClick} title={title}>
          {value}
        </button>
      ) : (
        <button className={className} onClick={onClick}>
          {value}
        </button>
      )}
    </>
  );
};

export default Button;
