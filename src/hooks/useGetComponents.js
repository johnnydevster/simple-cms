"use client";

import { useQuery } from "@tanstack/react-query";

export default function useGetComponents() {
  const query = useQuery(["components"], async () => {
    const response = await fetch("/api/get-components");
    const json = await response.json();
    return json;
  });
  return query;
}
