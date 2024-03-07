import React from "react";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: string[];
  disableFirst?: boolean;
}

function Select({
  className = "",
  options = [],
  disableFirst = false,
  children,
  ...rest
}: Props) {
  return (
    <select className={`select select-bordered ${className}`} {...rest}>
      {options.map((option, index) => (
        <option
          key={index}
          value={option}
          disabled={disableFirst && index === 0}
        >
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
