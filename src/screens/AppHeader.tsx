import HouseIcon from "../assets/house";

function AppHeader() {
  return (
    <div className="sticky top-0 z-10 flex h-16 items-center bg-accent p-4">
      <HouseIcon className="h-full fill-neutral" />
      <h1 className="mx-auto text-xl font-bold text-neutral">
        JG Planning Poker
      </h1>
    </div>
  );
}

export default AppHeader;
