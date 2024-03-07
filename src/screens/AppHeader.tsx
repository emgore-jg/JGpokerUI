import HouseIcon from "../svgs/house";

function AppHeader() {
  return (
    <div className="sticky top-0 z-10 flex h-16 items-center bg-accent p-4">
      <HouseIcon className="h-full fill-accent-content" />
      <h1 className="mx-auto text-4xl font-semibold text-accent-content">
        JG Planning Poker
      </h1>
    </div>
  );
}

export default AppHeader;
