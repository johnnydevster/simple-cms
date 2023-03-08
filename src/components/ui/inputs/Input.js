"use client";

import { useId } from "react";

export default function Input({
  value,
  onChange,
  onFocus,
  onBlur,
  error,
  placeholder,
  label,
  className = "",
}) {
  const id = useId();
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="text-sm font-semibold text-gray-500 block mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        className={`border ${
          error ? "border-red-500 text-red-500" : "focus:ring-1"
        } rounded px-2 py-2  ring-primary-300 outline-none ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {error && <span className="text-red-500 text-sm block">{error}</span>}
    </div>
  );
}
