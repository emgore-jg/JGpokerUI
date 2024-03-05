import HouseIcon from "../assets/house";

function AppHeader() {
  return (
    <div className="flex h-16 items-center bg-primary p-4">
      <HouseIcon className="h-full fill-white" />
      <h1 className="mx-auto text-xl font-bold text-white">
        JG Planning Poker
      </h1>
    </div>
  );
}

export default AppHeader;
