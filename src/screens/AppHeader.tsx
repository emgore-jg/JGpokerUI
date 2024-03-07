import HouseIcon from "../svgs/house";
import PlaygroundIcon from "../svgs/playground";

function AppHeader() {
  const redirectToHome = () => {
    window.location.href = "/home";
  };

  const redirectToPlayground = () => {
    window.location.href = "/playground";
  };

  return (
    <div className="sticky top-0 z-10 flex h-16 items-center bg-accent p-4">
      <HouseIcon
        className="mr-4 h-full fill-accent-content"
        onClick={redirectToHome}
      />
      <PlaygroundIcon
        className="h-full fill-accent-content"
        onClick={redirectToPlayground}
      />

      <h1 className="mx-auto text-4xl font-semibold text-accent-content">
        JG Planning Poker
      </h1>
    </div>
  );
}

export default AppHeader;
