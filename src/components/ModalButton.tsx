import { ReactNode } from "react";

interface props {
  modalID: string;
  buttonText: ReactNode | string;
  onClick?: () => void;
  modalContent: ReactNode;
}

function ModalButton({ modalID, buttonText, onClick, modalContent }: props) {
  function handleClick() {
    console.log("Button Clicked: open modal");
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
        <div className="modal-box">{modalContent}</div>
      </dialog>
    </>
  );
}

export default ModalButton;
