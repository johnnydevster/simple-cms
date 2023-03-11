"use client";

export default function Button({
  style,
  type,
  onClick,
  disabled,
  children,
  className = "",
}) {
  let theme;
  switch (style) {
    case "primary":
      theme =
        "bg-gradient-to-r from-primary-700 hover:from-primary-600 hover:to-primary-500 to-primary-600 text-white";
      break;
    case "secondary":
      theme =
        "bg-gradient-to-r from-primary-200 to-primary-100 hover:from-primary-100 hover:to-primary-50 text-primary-800 ";
      break;
  }

  return (
    <button
      disabled={disabled}
      type={type}
      className={`${
        theme + " " + className
      } py-2 px-4 rounded font-semibold transition-colors disabled:from-gray-100 disabled:to-gray-50 disabled:text-gray-300`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
