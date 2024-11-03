import { RenderMode } from "@/types/example";

export const getUserHref = (id: number, mode?: RenderMode) => {
  if (mode === "ssg") {
    return `/static-example/${id}`;
  }

  return `/${id}`;
};

export const getPostHref = (id: number, mode?: RenderMode, userId?: number) => {
  if (mode === "ssg") {
    return `/static-example/${userId}/posts/${id}`;
  }

  return `/posts/${id}`;
};
