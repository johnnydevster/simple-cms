import { useQuery } from "@tanstack/react-query";
import { formatQueryString } from "@/utils/formatQueryString";

export function useGetComponent(args) {
  const query = useQuery(["component", args.params], async () => {
    const response = await fetch(
      `/api/component${formatQueryString(args.params)}`
    );
    const json = await response.json();
    return json;
  });
  return query;
}
