import CardDetails from "../components/CardDetails";
import VoteQueue from "../components/VoteQueue";
import Alert from "../components/basics/Alert";

const VotingPage: React.FC = () => {
  const storedData = localStorage.getItem("cardData");
  const cardData = storedData ? JSON.parse(storedData) : [];

  return (
    <section
      id="votingPage"
      className="m-4 flex h-full flex-1 flex-col overflow-hidden"
    >
      <div className="flex h-full flex-row">
        <VoteQueue cards={cardData} />
        {cardData.length > 0 ? (
          <CardDetails
            title={cardData[0].title}
            issueNum={cardData[0].issueNum}
            description={cardData[0].description}
          />
        ) : (
          <div className="m-auto flex flex-col gap-4">
            <Alert
              type="warning"
              message="No cards to vote on! Come back later."
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default VotingPage;
