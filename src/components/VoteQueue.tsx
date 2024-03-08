import CardSummary from "./CardSummary";

interface props extends React.AllHTMLAttributes<HTMLDivElement> {
  cards: CardData[];
}

function VoteQueue({ className = "", cards, ...rest }: props) {
  return (
    <div
      className={`card mr-4 h-full w-1/6 gap-2 overflow-scroll bg-secondary p-4 text-neutral-content ${className}`}
      {...rest}
    >
      <p>{cards.length} cards total</p>
      {cards.map((data, index) => (
        <CardSummary key={index} cardData={data} isCompact={true} />
      ))}
    </div>
  );
}

export default VoteQueue;
