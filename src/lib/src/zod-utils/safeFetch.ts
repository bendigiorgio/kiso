import * as z from "zod";

const zodSafeFetch = <TData>(
  url: string,
  schema: z.Schema<TData>
): Promise<TData> => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const parsedData = schema.parse(data);
      return parsedData;
    });
};

export { zodSafeFetch };
