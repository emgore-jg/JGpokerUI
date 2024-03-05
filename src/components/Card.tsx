import { ReactNode } from "react";

interface props {
  children?: ReactNode;
}

function Card({ children }: props) {
  return (
    <div className="card h-fit w-96 bg-neutral p-4">
      <h1>this is a card</h1>
      <h2 className="text-italic">TIX-123</h2>
      {children}
    </div>
  );
}
export default Card;
