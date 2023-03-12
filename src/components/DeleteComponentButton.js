import ButtonModal from "./ui/ButtonModal";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "./ui/Button";
import { useDeleteComponent } from "@/hooks/useDeleteComponent";
import Alert from "./ui/Alert";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function DeleteComponentButton({
  id,
  name,
  setSelectedComponent,
  className = "",
}) {
  const { mutate, isLoading, isError, isSuccess, error } = useDeleteComponent({
    onSuccess,
  });

  const [opened, setOpened] = useState(false);

  function onSuccess() {
    setOpened(false);
    setSelectedComponent(null);
    toast.success("Successfully deleted component.");
  }

  return (
    <ButtonModal
      title="Delete component"
      isLoading={isLoading}
      opened={opened}
      setOpened={setOpened}
      buttonContent={
        <span className="rounded p-2 text-white text-xs">
          <DeleteForeverIcon className="w-6 h-6 fill-gray-300 hover:fill-gray-500 transition-colors" />
        </span>
      }
      className={`shadow px-2 py-1 group flex items-center gap-1 text-xs bg-white text-gray-500 rounded ${className}`}
    >
      <p className="mt-8">
        Are you sure you want to delete component{" "}
        <span className="font-semibold">{name}</span>?
      </p>
      <p className="mt-4 text-red-500">This action cannot be undone!</p>
      {isError && (
        <Alert className="mt-6" title="Error">
          {error?.message || "Something went wrong"}
        </Alert>
      )}
      <Button onClick={() => mutate({ id })} style="danger" className="mt-12">
        Delete component
      </Button>
    </ButtonModal>
  );
}
