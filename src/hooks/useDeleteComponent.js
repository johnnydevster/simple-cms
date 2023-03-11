import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteComponent(args) {
  const queryClient = useQueryClient();
  const query = useMutation(
    async (data) => {
      const response = await fetch("/api/component", {
        method: "DELETE",
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
        queryClient.invalidateQueries("components");
      },
    }
  );

  return query;
}
