import { useQuery } from "@tanstack/react-query";

export default function useGetComponents(args = {}) {
  const query = useQuery(["components"], async () => {
    const response = await fetch(`/api/components`);
    const json = await response.json();
    return json;
  });
  return query;
}
