"use client";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import Modal from "./ui/Modal";

export default function AddNewComponentButton({ className = "" }) {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)}>
        Hejsan modal
      </Modal>
      <button
        onClick={() => setOpened(true)}
        className={`shadow px-2 py-1 group flex items-center gap-1 text-xs bg-white text-gray-500 rounded ${className}`}
      >
        <AddCircleIcon className="fill-gray-400 group-hover:fill-primary-600 h-5 w-5 transition-colors" />
        Add component
      </button>
    </>
  );
}
