import { useGetComponent } from "@/hooks/useGetComponent";
import DeleteComponentButton from "./DeleteComponentButton";

export default function ComponentFields({
  selectedComponent,
  setSelectedComponent,
}) {
  const { data, isLoading, error } = useGetComponent({
    params: { id: selectedComponent },
  });
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">{selectedComponent?.name}</h2>
        <DeleteComponentButton
          id={selectedComponent?.id}
          name={selectedComponent?.name}
          setSelectedComponent={setSelectedComponent}
        />
      </div>
      <hr className="mt-4" />
    </div>
  );
}
