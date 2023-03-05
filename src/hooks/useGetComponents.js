"use client";

import { useQuery } from "@tanstack/react-query";

export default function useGetComponents() {
  const query = useQuery(["get-components"], async () => {
    const response = await fetch("/api/components");
    const json = await response.json();
    return json;
  });
  return query;
}
