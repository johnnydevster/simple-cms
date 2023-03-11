"use client";

import dynamic from "next/dynamic";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React, { useState } from "react";
import Button from "./Button";

const DynamicModal = dynamic(() =>
  import("@mantine/core").then((mod) => mod.Modal)
);

export default function ButtonModal({
  onClose,
  children,
  title,
  actions,
  style,
  buttonContent,
  classNames = {},
}) {
  const [opened, setOpened] = useState(false);
  const [hasHovered, setHasHovered] = useState(false);

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

      <Button
        style={style}
        onMouseEnter={() => setHasHovered(true)}
        onClick={() => setOpened(true)}
      >
        {buttonContent}
      </Button>
    </>
  );
}
