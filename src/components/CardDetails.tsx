import Button from "./Button";

interface props extends React.AllHTMLAttributes<HTMLDivElement> {
  className?: string;
  title: string;
  issueNum: number;
  description: string;
  isCompact?: boolean;
  vote?: string;
}

function CardDetails({ className, title, issueNum, description }: props) {
  return (
    <div
      className={`card flex h-full w-full flex-col gap-4 overflow-hidden bg-neutral p-4 text-neutral-content ${className}`}
    >
      <div className="flex flex-row">
        <div className=" flex-1">
          <h1 className="text-2xl capitalize ">{title}</h1>
          <h2 className="text-sm italic text-gray-500">TIX-{issueNum}</h2>
        </div>
        <div className="-mr-4 -mt-4 mb-4 ml-4 h-fit rounded-bl-2xl bg-primary p-4">
          placeholder for timer
        </div>
      </div>
      <p className="text-md h-1/4 overflow-scroll whitespace-pre-wrap">
        {description}
      </p>
      <label className="form-control w-full">
        <span className="label-text text-neutral-content">Vote*</span>
        <select className="select select-bordered w-fit bg-gray-200">
          <option selected>Pass/Abstain</option>
          <option>XS</option>
          <option>SM</option>
          <option>LG</option>
          <option>XL</option>
        </select>
      </label>
      <label className="form-control w-full flex-1">
        <span className="label-text text-neutral-content">Explanation*</span>
        <textarea
          className="textarea flex-1 resize-none bg-gray-200"
          id="description"
        ></textarea>
      </label>
      <Button className="ml-auto">Submit</Button>
    </div>
  );
}
export default CardDetails;
