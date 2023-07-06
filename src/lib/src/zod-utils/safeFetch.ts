import * as z from "zod";

const zodSafeFetch = async <TData>(
  url: string,
  schema: z.Schema<TData>
): Promise<TData> => {
  const res = await fetch(url);
  const data = await res.json();
  const parsedData = schema.parse(data);
  return parsedData;
};

export { zodSafeFetch };
