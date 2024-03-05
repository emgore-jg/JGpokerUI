import PlusIcon from "../assets/plus";
import Card from "../components/Card";

function AppHeader() {
  var n = 100;
  const cards = [];

  for (let i = 0; i < n; i++) {
    cards.push(<Card key={i}>card #{i + 1} description</Card>);
  }

  return (
    <div className=" flex flex-col gap-4 p-4">
      <button className="btn btn-primary w-fit fill-neutral text-neutral">
        <PlusIcon className="h-1/2" /> Create Card
      </button>
      <div className="flex flex-wrap justify-center gap-4">{cards}</div>
    </div>
  );
}

export default AppHeader;
