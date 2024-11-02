import { Method } from "@/types/api";

const LOCAL_URL = "http://localhost:3000/api/";
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
  return result;
};
