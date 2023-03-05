"use client";

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
      name: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create new component"
        actions={[
          <Button key="create" type="primary">
            Create component
          </Button>,
          <Button key="cancel" type="secondary">
            Cancel
          </Button>,
        ]}
      >
        <form>
          <fieldset>
            <Input
              {...form.getInputProps("name")}
              className="w-full"
              label="Component name"
              placeholder="Enter a name for your component"
            />
          </fieldset>
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
