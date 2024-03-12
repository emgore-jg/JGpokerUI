import CardDetails from "../components/CardDetails";
import VoteQueue from "../components/VoteQueue";

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
        <CardDetails
          title={"testing a really long one"}
          issueNum={0}
          description={"words are words are words"}
        />
      </div>
    </section>
  );
};

export default VotingPage;
