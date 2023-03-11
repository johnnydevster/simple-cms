"use client";

import useCreateComponent from "@/hooks/useCreateComponent";
import { validateComponentName } from "@/lib/formvalidation";
import { useForm } from "@mantine/form";
import Button from "./ui/Button";
import Input from "./ui/inputs/Input";
import ButtonModal from "./ui/ButtonModal";
import LoadingOverlay from "./ui/LoadingOverlay";
import Alert from "./ui/Alert";

export default function AddNewComponentButton({ className = "" }) {
  const { isLoading, isError, isSuccess, mutate, reset, error } =
    useCreateComponent({ onSuccess });

  const form = useForm({
    initialValues: {
      name: "",
    },
    transformValues: (values) => ({
      name: values.name.trim(),
    }),
    validate: {
      name: validateComponentName,
    },
  });

  function handleSubmit(values) {
    mutate(values);
  }

  function onSuccess() {
    form.reset();
  }

  return (
    <>
      <ButtonModal
        onClose={() => {
          form.reset();
          reset();
        }}
        title="Create new component"
        className={`shadow px-2 py-1 group flex items-center gap-1 text-xs bg-white text-gray-500 rounded ${className}`}
      >
        <LoadingOverlay visible={isLoading} />
        <form onSubmit={form.onSubmit(handleSubmit, () => reset())}>
          <fieldset>
            <Input
              {...form.getInputProps("name", { withFocus: false })}
              className="w-full"
              label="Component name"
              placeholder="Enter a name for your component"
            />
          </fieldset>
          {isError && (
            <Alert title="Error creating component">
              {error?.message || "Something went wrong"}
            </Alert>
          )}
          {isSuccess && (
            <Alert title="Component created" type="success">
              Component created!
            </Alert>
          )}

          <div className="mt-8 space-x-2 space-y-2">
            <Button key="create" style="primary" type="submit">
              Create component
            </Button>
          </div>
        </form>
      </ButtonModal>
    </>
  );
}
