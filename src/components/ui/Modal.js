"use client";

import { Modal as MantineModal } from "@mantine/core";

import dynamic from "next/dynamic";

const DynamicModal = dynamic(() =>
  import("@mantine/core").then((mod) => mod.Modal)
);

export default function Modal({
  opened,
  onClose,
  children,
  title,
  content,
  actions,
}) {
  return (
    <MantineModal
      opened={opened}
      onClose={onClose}
      centered
      title={title}
      classNames={{
        content: "border-t-8 border-primary-700",
        title: "text-xl font-medium text-gray-600",
      }}
    >
      {children}
    </MantineModal>
  );
}
