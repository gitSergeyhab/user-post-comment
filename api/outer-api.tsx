import { Method } from "@/types/api";
import { notFound } from "next/navigation";

const SERVER_URL = "https://jsonplaceholder.typicode.com";

export const outerRequest = async <R, B = undefined>(
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

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const result = await response.json();
  return result;
};
