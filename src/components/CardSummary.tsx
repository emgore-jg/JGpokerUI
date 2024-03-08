interface props extends React.AllHTMLAttributes<HTMLDivElement> {
  className?: string;
  title: string;
  issueNum: number;
  description: string;
  vote?: string;
  isCompact?: boolean;
}

function CardSummary({
  className,
  title,
  issueNum,
  description,
  vote,
  isCompact = false,
}: props) {
  return (
    <div
      className={`card flex w-96 max-w-full flex-row bg-neutral text-neutral-content ${vote ? "overflow-hidden" : ""} ${isCompact ? "h-fit" : "h-52"} ${className}`}
    >
      <div className={`m-4 flex ${vote ? "w-72" : "w-[22rem]"} flex-col`}>
        <h1 className="break-words text-lg capitalize">{title}</h1>
        <h2 className="text-xs italic text-gray-500">TIX-{issueNum}</h2>
        {!isCompact && (
          <p className="text-md overflow-scroll whitespace-pre-wrap break-words">
            {description}
          </p>
        )}
      </div>
      {vote && (
        <div className="flex w-24 items-center justify-center bg-primary text-4xl font-semibold">
          {vote}
        </div>
      )}
    </div>
  );
}
export default CardSummary;
