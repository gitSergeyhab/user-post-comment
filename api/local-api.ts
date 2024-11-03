import { Method } from "@/types/api";
import { notFound } from "next/navigation";

const LOCAL_URL = process.env.NEXT_PUBLIC_LOCAL_URL;

export const localRequest = async <R, B = undefined>(
  url: string,
  body?: B,
  method: Method = "GET"
): Promise<R> => {
  const response = await fetch(`${LOCAL_URL}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const result = await response.json();
  if (result.status === 404) {
    notFound();
  }

  if (result.status === 500) {
    throw new Error(result.message);
  }

  return result;
};
