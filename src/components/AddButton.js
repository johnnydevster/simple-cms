"use client";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function AddButton({ className = "" }) {
  return (
    <button
      className={`shadow px-2 py-1 group flex items-center gap-1 text-xs bg-white text-gray-500 rounded ${className}`}
    >
      <AddCircleIcon className="fill-gray-400 group-hover:fill-primary-600 h-5 w-5 transition-colors" />
      Add component
    </button>
  );
}
