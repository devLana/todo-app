import React from "react";

type ButtonProps = {
  className: string;
  onClick: () => void;
  title?: string;
  disabled?: boolean;
  value: string;
};

const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  title,
  disabled,
  value,
}) => (
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

export default Button;
