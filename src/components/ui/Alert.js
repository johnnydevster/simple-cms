import { Alert as MantineAlert } from "@mantine/core";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function Alert({
  title,
  type = "alert",
  className = "",
  children,
}) {
  let wrapperClass;
  let textClass;

  switch (type) {
    case "alert":
      textClass = "text-red-900";
      wrapperClass = `bg-red-100/70 ${textClass}`;
      break;
    case "warning":
      textClass = "text-yellow-900";
      wrapperClass = `bg-yellow-100/70 ${textClass}`;
      break;
    case "success":
      textClass = "text-green-900";
      wrapperClass = `bg-green-100/70 ${textClass}`;
      break;
  }
  return (
    <MantineAlert
      className={`${wrapperClass} ${className}`}
      classNames={{ message: `` }}
      icon={<ErrorOutlineIcon className="w-5" />}
      title={title}
    >
      {children}
    </MantineAlert>
  );
}
