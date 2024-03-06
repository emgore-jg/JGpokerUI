interface props extends React.AllHTMLAttributes<HTMLDivElement> {
  className?: string;
  title: string;
  issueNum: number;
  description: string;
  isCompact?: boolean;
}

function Card({
  className,
  title,
  issueNum,
  description,
  isCompact = false,
}: props) {
  return (
    <div
      className={`card w-96 bg-neutral p-4 text-neutral-content ${isCompact ? "h-fit" : "h-52"} ${className}`}
    >
      <h1 className="text-lg capitalize ">{title}</h1>
      <h2 className="text-xs italic text-gray-500">TIX-{issueNum}</h2>
      {!isCompact && (
        <p className="text-md overflow-scroll whitespace-pre-wrap">
          {description}
        </p>
      )}
    </div>
  );
}
export default Card;
