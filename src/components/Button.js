import React from "react";

const Button = props => {
  const { className, onClick, title, disabled, value } = props;

  return (
    <>
      {title ? (
        <button
          className={className}
          onClick={onClick}
          title={title}
          disabled={disabled ? true : false}
        >
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
