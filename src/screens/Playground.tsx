import { useState } from "react";
import SSEComponent, { httpData } from "../components/AwaitSSE";

const Playground = () => {
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSSEMessage = (res: httpData) => {
    // Handle SSE messages
    console.log("SSE Message:", res.data);
    setData(res.data);
  };

  const handleSSEError = (error: Event) => {
    // Handle SSE errors
    const errorMessage = error.toString() || "Unknown error occurred";
    console.error("SSE Error:", error);
    setError(errorMessage);
  };

  return (
    <section id="playground" className="m-4 flex flex-col">
      <h1 className="mx-auto text-xl">
        A place to develop and test components!
      </h1>
      <div>
        {error ? (
          <span>Returned error: {error}</span>
        ) : (
          <span>Returned data: {data || "no data"}</span>
        )}
        {/* SSEComponent for real-time updates */}
        <SSEComponent
          url="/your-sse-channel"
          onMessage={handleSSEMessage}
          onError={handleSSEError}
        />
      </div>
    </section>
  );
};

export default Playground;
