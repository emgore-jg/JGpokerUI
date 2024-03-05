import HouseIcon from "../assets/house";

function Home() {
  return (
    <div className="bg-primary p-4 h-16 flex items-center">
      <HouseIcon className="fill-white h-full" />
      <h1 className="text-xl font-bold text-white mx-auto">
        JG Planning Poker
      </h1>
    </div>
  );
}

export default Home;
