import Timer from "./Timer";
import Button from "./basics/Button";
import Select from "./basics/Select";
import Textarea from "./basics/Textarea";

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
        <Timer />
      </div>
      <p className="text-md h-1/4 overflow-scroll whitespace-pre-wrap">
        {description}
      </p>
      <label className="form-control w-full">
        <span className="label-text text-neutral-content">Vote*</span>
        <Select
          className="w-fit bg-gray-200"
          options={["Pass/Abstain", "XS", "SM", "MD", "LG", "XL"]}
        />
      </label>
      <label className="form-control w-full flex-1">
        <span className="label-text text-neutral-content">Explanation*</span>
        <Textarea className="flex-1 resize-none bg-gray-200" id="description" />
      </label>
      <Button className="ml-auto">Submit</Button>
    </div>
  );
}
export default CardDetails;
