interface props extends React.AllHTMLAttributes<HTMLDivElement> {
  className?: string;
  cardData: CardData;
  isCompact?: boolean;
}

function CardSummary({ className, cardData, isCompact = false }: props) {
  return (
    <div
      className={`card flex w-96 max-w-full flex-row bg-neutral text-neutral-content ${cardData.vote ? "overflow-hidden" : ""} ${isCompact ? "h-fit" : "h-52"} ${className}`}
    >
      <div
        className={`m-4 flex ${cardData.vote ? "w-72" : "w-[22rem]"} flex-col`}
      >
        <h1 className="break-words text-lg capitalize">{cardData.title}</h1>
        <h2 className="text-xs italic text-gray-500">
          TIX-{cardData.issueNum}
        </h2>
        {!isCompact && (
          <p className="text-md overflow-scroll whitespace-pre-wrap break-words">
            {cardData.description}
          </p>
        )}
      </div>
      {cardData.vote && (
        <div className="flex w-24 items-center justify-center bg-primary text-4xl font-semibold">
          {cardData.vote}
        </div>
      )}
    </div>
  );
}
export default CardSummary;
