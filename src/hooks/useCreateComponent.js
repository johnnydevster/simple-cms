import { useMutation } from "@tanstack/react-query";

export default function useCreateComponent() {
  const query = useMutation(["create-component"], async (data) => {
    const response = await fetch("/api/components", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const json = await response.json();
    if (response.ok) {
      return json;
    }
    throw json;
  });

  return query;
}
