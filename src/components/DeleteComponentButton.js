import ButtonModal from "./ui/ButtonModal";

export default function DeleteComponentButton({ className = "" }) {
  return (
    <ButtonModal
      onClose={() => {}}
      title="New component"
      style="primary"
      buttonContent="hej"
      className={`shadow px-2 py-1 group flex items-center gap-1 text-xs bg-white text-gray-500 rounded ${className}`}
    >
      Modal content
    </ButtonModal>
  );
}
