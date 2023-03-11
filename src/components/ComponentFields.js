import { useGetComponent } from "@/hooks/useGetComponent";

export default function ComponentFields({ selectedComponent }) {
  const { data, isLoading, error } = useGetComponent({
    params: { id: selectedComponent },
  });
  return <div>ComponentFields</div>;
}
