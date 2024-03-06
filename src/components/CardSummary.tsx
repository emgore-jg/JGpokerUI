interface props extends React.AllHTMLAttributes<HTMLDivElement> {
  className?: string;
  title: string;
  issueNum: number;
  description: string;
  isCompact?: boolean;
  vote?: string;
}

function CardSummary({
  className,
  title,
  issueNum,
  description,
  isCompact = false,
  vote,
}: props) {
  return (
    <div
      className={`card flex w-96 flex-row bg-neutral text-neutral-content ${isCompact ? "h-fit" : "h-52"} ${vote ? "overflow-hidden" : ""} ${className}`}
    >
      <div className="m-4 mr-0 flex flex-1 flex-col">
        <h1 className="text-lg capitalize ">{title}</h1>
        <h2 className="text-xs italic text-gray-500">TIX-{issueNum}</h2>
        {!isCompact && (
          <p className="text-md overflow-scroll whitespace-pre-wrap">
            {description}
          </p>
        )}
      </div>
      {vote && (
        <div className="flex max-w-24 items-center bg-primary px-4 text-4xl font-semibold">
          {vote}
        </div>
      )}
    </div>
  );
}
export default CardSummary;
