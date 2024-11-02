import { Method } from "@/types/api";

const SERVER_URL = "https://jsonplaceholder.typicode.com";

export const requestPH = async <R, B = undefined>(
  url: string,
  body?: B,
  method: Method = "GET"
): Promise<R> => {
  const response = await fetch(`${SERVER_URL}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const result = await response.json();
  return result;
};
