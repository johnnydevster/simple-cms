"use client";

import useCreateComponent from "@/hooks/useCreateComponent";
import { validateComponentName } from "@/lib/formvalidation";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useForm } from "@mantine/form";
import Button from "./ui/Button";
import Input from "./ui/inputs/Input";
import ButtonModal from "./ui/ButtonModal";
import Alert from "./ui/Alert";
import { useState } from "react";

export default function AddNewComponentButton({ className = "" }) {
  const { isLoading, isError, isSuccess, mutate, reset, error } =
    useCreateComponent({ onSuccess });

  const [opened, setOpened] = useState(false);

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

  function handleError(errors) {
    reset();
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
        opened={opened}
        setOpened={setOpened}
        buttonContent={
          <span
            className={`shadow px-2 py-1 group flex items-center gap-1 text-xs bg-white text-gray-500 rounded ${className}`}
          >
            <AddCircleIcon className="fill-gray-400 group-hover:fill-primary-600 h-5 w-5 transition-colors" />
            New component
          </span>
        }
        title="New component"
        isLoading={isLoading}
      >
        <form onSubmit={form.onSubmit(handleSubmit, handleError)}>
          <fieldset className="mt-4" disabled={isLoading}>
            <Input
              {...form.getInputProps("name", { withFocus: false })}
              className="w-full"
              label="Name"
              placeholder="Enter a name for your component"
            />
          </fieldset>
          {isError && (
            <Alert title="Error">
              {error?.message || "Something went wrong"}
            </Alert>
          )}
          {isSuccess && (
            <Alert title="Success" type="success">
              Successfully created component.
            </Alert>
          )}
          <Button
            key="submit"
            className="mt-8"
            disabled={isLoading}
            style="primary"
            type="submit"
          >
            Create component
          </Button>
        </form>
      </ButtonModal>
    </>
  );
}
