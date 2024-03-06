import PlusIcon from "../assets/plus";
import Card from "../components/Card";
import ModalButton from "../components/ModalButton";

function AppHeader() {
  var n = 100;
  const cards = [];

  for (let i = 0; i < n; i++) {
    cards.push(<Card key={i}>card #{i + 1} description</Card>);
  }

  return (
    <div className=" flex flex-col gap-4 p-4">
      <ModalButton
        buttonText={
          <>
            <PlusIcon className="h-1/2" /> Create Card
          </>
        }
        modalContent={
          <>
            <h3 className="text-lg font-bold">Hello!</h3>
            <p className="py-4">Press ESC key or click on ✕ button to close</p>
          </>
        }
      ></ModalButton>
      <div className="flex flex-wrap justify-center gap-4">{cards}</div>
    </div>
  );
}

export default AppHeader;
