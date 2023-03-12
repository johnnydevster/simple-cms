"use client";

export default function Button({
  style,
  type,
  onMouseEnter,
  onClick,
  disabled,
  children,
  className = "",
}) {
  let theme;
  switch (style) {
    case "unstyled":
      break;
    case "primary":
      theme =
        "py-2 px-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white border-2 border-primary-700";
      break;
    case "secondary":
      theme =
        "py-2 px-4 bg-gradient-to-r from-primary-200 to-primary-100 hover:from-primary-100 hover:to-primary-50 text-primary-800 border-2 border-primary-200";
      break;
    case "danger":
      theme =
        "py-2 px-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white border-2 border-red-700";
      break;
  }

  return (
    <button
      disabled={disabled}
      type={type}
      className={`${
        theme + " " + className
      } rounded font-semibold transition-colors disabled:from-gray-100 disabled:to-gray-50 disabled:text-gray-300`}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
