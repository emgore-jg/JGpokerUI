interface props extends React.AllHTMLAttributes<HTMLDivElement> {}

function Timer({ className = "", ...rest }: props) {
  return (
    <div
      className={`-mr-4 -mt-4 mb-4 ml-4 flex h-fit flex-col rounded-bl-2xl bg-primary p-4 text-center ${className}`}
      {...rest}
    >
      <h3 className="text-xl">Time Remaining</h3>
      <h1 className="text-3xl">00:00</h1>
    </div>
  );
}

export default Timer;
