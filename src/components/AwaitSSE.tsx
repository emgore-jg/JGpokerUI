import React, { useEffect } from "react";
export type httpData = {
  data: string | null;
};
interface SSEComponentProps {
  url: string;
  onMessage: (data: httpData) => void;
  onError: (err: Event) => void;
}

interface SSEMessageEvent {
  data: string;
}

const AwaitSSE: React.FC<SSEComponentProps> = ({ url, onMessage, onError }) => {
  useEffect(() => {
    const eventSource = new EventSource(url);

    eventSource.addEventListener("message", (event: SSEMessageEvent) => {
      console.log("message recvieved : ", event.data);
      onMessage(JSON.parse(event.data));
    });

    eventSource.addEventListener("error", (event) => {
      onError(event);
    });

    return () => {
      eventSource.close();
    };
  }, [url, onMessage, onError]);

  return null; // This component doesn't render anything, it just manages the SSE connection.
};

export default AwaitSSE;
