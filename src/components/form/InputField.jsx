import React from "react";

const InputField = ({
  type,
  name,
  id,
  className,
  placeholder,
  isRequired = false,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className={`input-field ${className}`}
      placeholder={placeholder}
      required={isRequired}
    />
  );
};

export default InputField;
