import { ReactNode } from "react";

interface props {
  buttonText: ReactNode | string;
  onClick?: () => void;
  modalContent: ReactNode;
}

function ModalButton({ buttonText, onClick, modalContent }: props) {
  function handleClick() {
    console.log("you clicked the button bro!!");
    const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
    modal?.showModal();
    onClick;
  }

  return (
    <>
      <button
        className="btn btn-primary w-fit fill-primary-content text-primary-content"
        onClick={() => {
          handleClick();
        }}
      >
        {buttonText}
      </button>
      <dialog id="my_modal_1" className=" modal bg-black bg-opacity-60">
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
