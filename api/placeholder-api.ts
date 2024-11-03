import { Method } from "@/types/api";

const SERVER_URL = "https://jsonplaceholder.typicode.com";

export const requestPH = async <B = undefined>(
  url: string,
  body?: B,
  method: Method = "GET"
) => {
  return await fetch(`${SERVER_URL}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
};
