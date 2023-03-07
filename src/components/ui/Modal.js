"use client";

import { Modal as MantineModal } from "@mantine/core";

export default function Modal({ opened, onClose, children, title, actions }) {
  return (
    <MantineModal
      opened={opened}
      onClose={onClose}
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
    </MantineModal>
  );
}
