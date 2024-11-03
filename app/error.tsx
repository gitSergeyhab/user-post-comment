"use client";

import { ErrorComponent } from "@/shared/components/error";

export default function Error({ error }: { error: Error }) {
  return (
    <ErrorComponent>
      <h2>{error.message}</h2>
    </ErrorComponent>
  );
}
