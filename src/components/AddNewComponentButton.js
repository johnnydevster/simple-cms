"use client";

import useCreateComponent from "@/hooks/useCreateComponent";
import { validateComponentName } from "@/lib/formvalidation";
import { useForm } from "@mantine/form";
import Button from "./ui/Button";
import Input from "./ui/inputs/Input";
import ButtonModal from "./ui/ButtonModal";

export default function AddNewComponentButton({ className = "" }) {
  const { isLoading, isError, isSuccess, mutate, reset, error } =
    useCreateComponent();

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

  return (
    <>
      <ButtonModal
        onClose={() => form.reset()}
        title="Create new component"
        classNames={{
          button:
            "shadow px-2 py-1 group flex items-center gap-1 text-xs bg-white text-gray-500 rounded",
        }}
      >
        <form onSubmit={form.onSubmit((values) => mutate(values))}>
          <fieldset>
            <Input
              {...form.getInputProps("name", { withFocus: false })}
              className="w-full"
              label="Component name"
              placeholder="Enter a name for your component"
            />
          </fieldset>
          {isError && <span></span>}
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
