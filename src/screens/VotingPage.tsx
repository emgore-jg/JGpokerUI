import CardDetails from "../components/CardDetails";
import VoteQueue from "../components/VoteQueue";

const sampleCardData = [
  {
    title: "Card 1",
    issueNum: 1,
    description: "This is the first card",
  },
  {
    title: "Card 2",
    issueNum: 2,
    description: "This is the second card",
  },
  {
    title: "Card 3",
    issueNum: 3,
    description: "This is the third card",
  },
  {
    title: "Card 4",
    issueNum: 4,
    description: "This is the fourth card",
  },
  {
    title: "Card 5",
    issueNum: 5,
    description: "This is the fifth card",
  },
  {
    title: "Card 6",
    issueNum: 6,
    description: "This is the sixth card",
  },
  {
    title: "Card 7",
    issueNum: 7,
    description: "This is the seventh card",
  },
  {
    title: "Card 8",
    issueNum: 8,
    description: "This is the eighth card",
  },
  {
    title: "Card 9",
    issueNum: 9,
    description: "This is the ninth card",
  },
  {
    title: "Card 10",
    issueNum: 10,
    description: "This is the tenth card",
  },
  {
    title: "Card 11",
    issueNum: 11,
    description: "This is the eleventh card",
  },
  {
    title: "Card 12",
    issueNum: 12,
    description: "This is the twelfth card",
  },
  {
    title: "Card 13",
    issueNum: 13,
    description: "This is the thirteenth card",
  },
  {
    title: "Card 14",
    issueNum: 14,
    description: "This is the fourteenth card",
  },
  {
    title: "Card 15",
    issueNum: 15,
    description: "This is the fifteenth card",
  },
  {
    title: "Card 16",
    issueNum: 16,
    description: "This is the sixteenth card",
  },
  {
    title: "Card 17",
    issueNum: 17,
    description: "This is the seventeenth card",
  },
  {
    title: "Card 18",
    issueNum: 18,
    description: "This is the eighteenth card",
  },
  {
    title: "Card 19",
    issueNum: 19,
    description: "This is the nineteenth card",
  },
  {
    title: "Card 20",
    issueNum: 20,
    description: "This is the twentieth card",
  },
];

const VotingPage: React.FC = () => {
  return (
    <section
      id="votingPage"
      className="m-4 flex h-full flex-1 flex-col overflow-hidden"
    >
      <div className="flex h-full flex-row">
        <VoteQueue cards={sampleCardData} />
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
