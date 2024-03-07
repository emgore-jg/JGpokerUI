import { ReactNode } from "react";
import Button from "./basics/Button";

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
      <Button
        className="btn-primary fill-primary-content"
        onClick={() => {
          handleClick();
        }}
      >
        {buttonText}
      </Button>
      <dialog id={modalID} className=" modal bg-black bg-opacity-60">
        <div className="modal-box">{modalContent}</div>
      </dialog>
    </>
  );
}

export default ModalButton;
