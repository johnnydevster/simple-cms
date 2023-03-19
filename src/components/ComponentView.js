import ComponentFields from "./ComponentFields";
import DeleteComponentButton from "./DeleteComponentButton";

export default function ComponentView({
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
        <ComponentFields fields={selectedComponent.fields} />
      ) : (
        <p className="mt-4">No fields added yet</p>
      )}
    </div>
  );
}
