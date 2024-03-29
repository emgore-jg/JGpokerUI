import React, { useEffect, useState } from "react";
import PlusIcon from "../svgs/plus";
import ModalButton from "../components/ModalButton";
import Button from "../components/basics/Button";
import CardSummary from "../components/CardSummary";
import Input from "../components/basics/Input";
import Textarea from "../components/basics/Textarea";
import Select from "../components/basics/Select";
import PlayIcon from "../svgs/play";

const HomePage: React.FC = () => {
  const [cardData, setCardData] = useState<CardData[]>([]);

  useEffect(() => {
    // Retrieve cardData from local storage on component mount
    const storedData = localStorage.getItem("cardData");
    if (storedData) {
      setCardData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    // Save cardData to local storage whenever it changes
    localStorage.setItem("cardData", JSON.stringify(cardData));
  }, [cardData]);

  const clearCard = () => {
    const titleInput = document.getElementById("title") as HTMLInputElement;
    const issueNumInput = document.getElementById(
      "issueNum",
    ) as HTMLInputElement;
    const descriptionInput = document.getElementById(
      "description",
    ) as HTMLInputElement;
    const voteSelect = document.getElementById("vote") as HTMLSelectElement;

    // Reset input fields
    titleInput.value = "";
    issueNumInput.value = "";
    descriptionInput.value = "";
    voteSelect.selectedIndex = 0;

    //remove error borders
    titleInput.classList.remove("input-error");
    issueNumInput.classList.remove("input-error");
    descriptionInput.classList.remove("textarea-error");
    voteSelect.classList.remove("select-error");
  };

  const handleAbortCard = () => {
    clearCard();
    const modal = document.getElementById(
      "create-card-modal",
    ) as HTMLDialogElement;
    modal?.close();
  };

  const handleCreateCard = () => {
    const titleInput = document.getElementById("title") as HTMLInputElement;
    const issueNumInput = document.getElementById(
      "issueNum",
    ) as HTMLInputElement;
    const descriptionInput = document.getElementById(
      "description",
    ) as HTMLInputElement;
    const voteSelect = document.getElementById("vote") as HTMLSelectElement;

    let isValid = true;

    if (titleInput && titleInput.value.trim() === "") {
      titleInput.classList.add("input-error");
      isValid = false;
    } else {
      titleInput.classList.remove("input-error");
    }

    if (issueNumInput && issueNumInput.value.trim() === "") {
      issueNumInput.classList.add("input-error");
      isValid = false;
    } else {
      issueNumInput.classList.remove("input-error");
    }

    if (descriptionInput && descriptionInput.value.trim() === "") {
      descriptionInput.classList.add("textarea-error");
      isValid = false;
    } else {
      descriptionInput.classList.remove("textarea-error");
    }

    if (voteSelect && voteSelect.selectedIndex === 0) {
      voteSelect.classList.add("select-error");
      isValid = false;
    } else {
      voteSelect.classList.remove("select-error");
    }

    if (isValid) {
      const title = titleInput.value;
      const issueNum = parseInt(issueNumInput.value);
      const description = descriptionInput.value;
      const vote = voteSelect.value;

      const newData: CardData = {
        title: title,
        issueNum: issueNum,
        description: description,
        vote: vote,
      };

      setCardData((prevData) => [...prevData, newData]);

      clearCard();

      const modal = document.getElementById(
        "create-card-modal",
      ) as HTMLDialogElement;
      modal?.close();
    }
  };

  return (
    <section id="homePage" className="flex h-full w-full flex-col gap-4 p-4">
      <div className="flex gap-4">
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
                <span className="label-text">Title*</span>
                <Input type="text" id="title" />
              </label>
              <label className="form-control w-full">
                <span className="label-text">Issue #*</span>
                <Input type="number" id="issueNum" />
              </label>
              <label className="form-control w-full">
                <span className="label-text">Description*</span>
                <Textarea id="description" className="max-h-50vh" />
              </label>
              <label className="form-control w-full">
                <span className="label-text">Vote*</span>
                <Select
                  id="vote"
                  options={["T-shirt Size", "XS", "SM", "MD", "LG", "XL"]}
                  disableFirst={true}
                />
              </label>

              <div className="flex flex-row justify-between">
                <Button className="btn-error" onClick={handleAbortCard}>
                  Cancel
                </Button>
                <Button className="btn-primary" onClick={handleCreateCard}>
                  Create
                </Button>
              </div>
            </div>
          }
        />
        <Button
          className="btn-primary"
          onClick={() => {
            window.location.href = "/voting";
          }}
        >
          <PlayIcon className="h-1/2" />
          Start Game
        </Button>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {cardData.map((data, index) => (
          <CardSummary
            key={index}
            cardData={data}
            //isCompact={true}
          />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
