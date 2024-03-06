import { ReactNode } from "react";

interface props {
  modalID: string;
  buttonText: ReactNode | string;
  onClick?: () => void;
  modalContent: ReactNode;
}

function ModalButton({ modalID, buttonText, onClick, modalContent }: props) {
  function handleClick() {
    console.log("you clicked the button bro!!");
    const modal = document.getElementById(modalID) as HTMLDialogElement;
    modal?.showModal();
    onClick;
  }

  return (
    <>
      <button
        className="btn btn-primary w-fit fill-primary-content"
        onClick={() => {
          handleClick();
        }}
      >
        {buttonText}
      </button>
      <dialog id={modalID} className=" modal bg-black bg-opacity-60">
        <div className=" modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              ✕
            </button>
          </form>
          {modalContent}
        </div>
      </dialog>
    </>
  );
}

export default ModalButton;
