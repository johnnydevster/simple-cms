import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useCreateComponent(args) {
  const queryClient = useQueryClient();

  const query = useMutation(
    async (data) => {
      const response = await fetch("/api/component", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return;
      }
      const json = await response.json();
      throw json;
    },
    {
      onSuccess: () => {
        args.onSuccess?.();
        queryClient.invalidateQueries(["components"]);
      },
    }
  );

  return query;
}
