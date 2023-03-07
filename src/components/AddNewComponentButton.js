"use client";

import { validateComponentName } from "@/lib/formvalidation";
import { useForm } from "@mantine/form";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/inputs/Input";
import Modal from "./ui/Modal";

export default function AddNewComponentButton({ className = "" }) {
  const [opened, setOpened] = useState(false);
  const form = useForm({
    initialValues: {
      name: "",
    },
    validate: {
      name: validateComponentName,
    },
  });

  function handleSubmit(e) {
    console.log("submitted");
  }

  function handleErrors(errors) {
    console.log(errors);
  }

  function handleModalClose() {
    setOpened(false);
    form.reset();
  }

  return (
    <>
      <Modal
        opened={opened}
        onClose={handleModalClose}
        title="Create new component"
      >
        <form onSubmit={form.onSubmit(handleSubmit, handleErrors)}>
          <fieldset>
            <Input
              {...form.getInputProps("name")}
              className="w-full"
              label="Component name"
              placeholder="Enter a name for your component"
            />
          </fieldset>
          <div className="mt-8 space-x-2 space-y-2">
            <Button key="create" style="primary" type="submit">
              Create component
            </Button>
          </div>
        </form>
      </Modal>

      <button
        onClick={() => setOpened(true)}
        className={`shadow px-2 py-1 group flex items-center gap-1 text-xs bg-white text-gray-500 rounded ${className}`}
      >
        <AddCircleIcon className="fill-gray-400 group-hover:fill-primary-600 h-5 w-5 transition-colors" />
        Create component
      </button>
    </>
  );
}
