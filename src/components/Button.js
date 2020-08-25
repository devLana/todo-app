import React from "react";

const Button = props => {
  const { className, onClick, title, disable, value } = props;

  return (
    <>
      {title && disable ? (
        <button
          className={className}
          onClick={onClick}
          title={title}
          disabled={disable}
        >
          {value}
        </button>
      ) : title ? (
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
