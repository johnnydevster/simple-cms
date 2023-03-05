"use client";

export default function Button({ type, onClick, children, className = "" }) {
  let theme;
  switch (type) {
    case "primary":
      theme =
        "bg-gradient-to-r from-primary-700 hover:from-primary-600 hover:to-primary-500 to-primary-600 text-white";
      break;
    case "secondary":
      theme =
        "bg-gradient-to-r from-primary-300 to-primary-200 hover:from-primary-200 hover:to-primary-100 text-primary-800 ";
      break;
  }

  return (
    <button
      className={`${
        theme + " " + className
      } py-2 px-4 rounded font-semibold transition-colors`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
