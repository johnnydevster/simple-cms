import { useGetComponent } from "@/hooks/useGetComponent";
import ComponentField from "./ComponentField";
import DeleteComponentButton from "./DeleteComponentButton";

export default function ComponentFields({
  selectedComponent,
  setSelectedComponent,
}) {
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
      {selectedComponent?.fields.length > 0 ? (
        <>
          <h3 className="font-semibold mt-4">Fields</h3>
          {selectedComponent?.fields.map((field) => (
            <ComponentField key={field.id} field={field} />
          ))}
        </>
      ) : (
        <p className="mt-4">No fields added yet</p>
      )}
    </div>
  );
}
