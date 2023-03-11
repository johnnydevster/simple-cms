import ButtonModal from "./ui/ButtonModal";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "./ui/Button";

export default function DeleteComponentButton({ name, className = "" }) {
  return (
    <ButtonModal
      onClose={() => {}}
      title="Delete component"
      buttonContent={
        <span className="rounded p-2 text-white text-xs">
          <DeleteForeverIcon className="w-6 h-6 fill-gray-300 hover:fill-gray-500 transition-colors" />
        </span>
      }
      className={`shadow px-2 py-1 group flex items-center gap-1 text-xs bg-white text-gray-500 rounded ${className}`}
    >
      <p className="mt-8 text-red-500">
        Are you sure you want to delete component{" "}
        <span className="font-semibold">{name}</span>?
      </p>
      <p className="mt-2 text-red-500">This action cannot be undone!</p>

      <Button style="danger" className="mt-8">
        Delete component
      </Button>
    </ButtonModal>
  );
}
