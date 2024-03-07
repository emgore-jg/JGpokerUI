import React, { useEffect, useState } from "react";
const isDev = process.env.REACT_APP_NODE_ENV === "development";

interface QueryOptions {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  url: string;
  headers?: HeadersInit;
  body?: BodyInit | null;
  params?: URLSearchParams;
}

interface AwaitProps {
  children: React.ReactNode;
  setData: (data: unknown) => void;
  hasRun?: boolean;
  onError: (err: unknown) => void;
}

const AwaitQuery = ({
  children,
  setData,
  hasRun = false,
  onError,
  ...options
}: QueryOptions & AwaitProps) => {
  const { method, url, headers, body, params } = options;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const requestInit: RequestInit = {
      method,
      headers: new Headers(headers),
      credentials: isDev ? "omit" : "include",
    };
    async function executeQuery() {
      if (hasRun) return; //prevent execution
      const isGetMethod = method === "GET";
      try {
        const requestFinal = { ...requestInit };
        requestFinal.body = !isGetMethod ? body : null;

        const queryString = `${params}`;
        const apiUrl = params ? `${url}${queryString}` : url;
        const response = await fetch(apiUrl, { ...requestFinal });
        if (!response.ok) {
          response.json().then((error) => {
            console.log(error);
            throw error?.message || error?.error;
          });
        }
        const results =
          response.status === 200 ? await response.json() : response.statusText;
        setError(null);
        setData(results);
      } catch (err) {
        setError(err as Error);
        throw new Error(err as string);
      } finally {
        setIsLoading(false);
      }
    }
    executeQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [body, params, url, method, headers]);

  //guard clauses
  if (isLoading) {
    return (
      <div
        id="replaceMe.Spinner"
        className="flex h-full w-full items-center justify-center"
      >
        <p>Will one day be replaced by a spinner</p>
      </div>
    );
  }
  if (error) {
    onError(error);
    return (
      <span className="flex h-full w-full items-center justify-center">
        {children}
      </span>
    );
  }
  return (
    <span className="flex h-full w-full items-center justify-center">
      {children}
    </span>
  );
};

export default AwaitQuery;
