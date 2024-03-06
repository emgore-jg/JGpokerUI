import PlusIcon from "../assets/plus";
import Card from "../components/Card";
import ModalButton from "../components/ModalButton";

function AppHeader() {
  var n = 100;
  const cards = [];

  for (let i = 0; i < n; i++) {
    cards.push(<Card key={i}>card #{i + 1} description</Card>);
  }
  var modalID = "create-card-modal";
  return (
    <div className=" flex flex-col gap-4 p-4">
      <ModalButton
        modalID="create-card-modal"
        buttonText={
          <>
            <PlusIcon className="h-1/2" /> Create Card
          </>
        }
        modalContent={
          <div className="flex max-h-screen flex-col gap-2">
            <h1 className="mb-4 text-lg font-bold">Create Card</h1>
            <label className="form-control w-full">
              <span className="label-text">Title</span>
              <input type="text" className="input input-bordered w-full" />
            </label>
            <label className="form-control w-full">
              <span className="label-text">Issue #</span>
              <input type="text" className="input input-bordered w-full" />
            </label>
            <label className="form-control w-full">
              <span className="label-text">Description</span>
              <textarea className="max-h-50vh textarea textarea-bordered"></textarea>
            </label>
            <button
              className="btn btn-primary ml-auto w-fit"
              onClick={() => {
                console.log("clicked create");
                const modal = document.getElementById(
                  modalID,
                ) as HTMLDialogElement;
                modal?.close();
              }}
            >
              Create
            </button>
          </div>
        }
      ></ModalButton>
      <div className="flex flex-wrap justify-center gap-4">{cards}</div>
    </div>
  );
}

export default AppHeader;
