"use client";

import { useDebounce } from "@/hooks/use-debounce";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { StyledSearch } from "./style";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  const [query, setQuery] = useState(name || "");
  const debouncedQuery = useDebounce(query);

  useEffect(() => {
    setQuery(name || "");
  }, [name]);

  useEffect(() => {
    const resultQuey = debouncedQuery
      ? `?name=${encodeURIComponent(debouncedQuery)}`
      : "/";
    router.push(resultQuey);
  }, [debouncedQuery, router]);

  return (
    <StyledSearch
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="имя"
    />
  );
}
