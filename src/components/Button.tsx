import { ReactNode } from "react";

interface props {
  onClick?: VoidFunction;
  className?: string;
  children?: ReactNode;
}

function Button({ onClick, className, children }: props) {
  return (
    <button className={`btn w-fit ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
