import CardDetails from "../components/CardDetails";

const Playground = () => {
  return (
    <section id="playground" className="m-4 flex h-full flex-col">
      <h1 className="mx-auto text-xl">
        A place to develop and test components!
      </h1>
      <div className="flex h-full flex-row">
        <div className="w-[300px] border-2 border-green-600">
          placeholder for left panel
        </div>
        <CardDetails
          title={"testing a really long one"}
          issueNum={0}
          description={"words are words are words"}
        />
      </div>
    </section>
  );
};

export default Playground;
