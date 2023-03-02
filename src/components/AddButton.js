"use client";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function AddButton({ className = "" }) {
  return (
    <button
      className={`border px-2 py-1 flex items-center gap-1 text-xs bg-gray-100 text-gray-500 rounded ${className}`}
    >
      <AddCircleIcon className="fill-green-500 hover:fill-green-500 h-5 w-5" />
      Add component
    </button>
  );
}
