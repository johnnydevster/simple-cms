"use client";

import dynamic from "next/dynamic";
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
            title: "text-xl font-medium text-white",
            header: title
              ? "bg-gradient-to-r from-primary-700 to-primary-800 py-3"
              : "",
            close: "ml-auto text-white hover:bg-primary-500 transition-colors",
          }}
        >
          {children}
          {actions?.length && (
            <>
              <div className="space-x-2 space-y-2">
                {actions.map((action) => action)}
              </div>
            </>
          )}
        </DynamicModal>
      )}

      {/* Button for opening modal */}
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
