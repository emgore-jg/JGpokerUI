import { ReactNode } from "react";

interface props extends React.AllHTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

function Card({ className, children }: props) {
  return (
    <div
      className={`card h-fit w-96 bg-neutral p-4 text-neutral-content ${className}`}
    >
      {children}
    </div>
  );
}
export default Card;
