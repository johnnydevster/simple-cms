"use client";

import dynamic from "next/dynamic";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";

const DynamicModal = dynamic(() =>
  import("@mantine/core").then((mod) => mod.Modal)
);

export default function ButtonModal({
  onClose,
  children,
  title,
  actions,
  classNames = {},
}) {
  const [opened, setOpened] = useState(false);
  const [hasHovered, setHasHovered] = useState(false);

  classNames = {
    button: "",
    ...classNames,
  };

  return (
    <>
      {(hasHovered || opened) && (
        <DynamicModal
          opened={opened}
          onClose={() => {
            onClose && onClose();
            setOpened(false);
          }}
          centered
          title={title}
          classNames={{
            content: "border-t-8 border-primary-700",
            title: "text-xl font-medium text-gray-600",
            header: title ? "pb-8" : "",
            close: "ml-auto",
          }}
        >
          {children}
          {actions?.length && (
            <>
              <div className="mt-8 space-x-2 space-y-2">
                {actions.map((action) => action)}
              </div>
            </>
          )}
        </DynamicModal>
      )}

      <button
        onMouseEnter={() => setHasHovered(true)}
        onClick={() => setOpened(true)}
        className={classNames.button}
      >
        <AddCircleIcon className="fill-gray-400 group-hover:fill-primary-600 h-5 w-5 transition-colors" />
        Create component
      </button>
    </>
  );
}
