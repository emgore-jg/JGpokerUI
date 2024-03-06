import { ReactNode } from "react";

interface props {
  children?: ReactNode;
}

function Card({ children }: props) {
  return (
    <div className="card h-fit w-96 bg-neutral p-4 text-neutral-content">
      <h1 className="text-lg capitalize ">this is a card</h1>
      <h2 className="text-xs italic text-gray-500">TIX-123</h2>
      <p className="text-md"> {children}</p>
    </div>
  );
}
export default Card;
