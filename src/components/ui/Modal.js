"use client";

import { Modal as MantineModal } from "@mantine/core";

export default function Modal({ opened, onClose, children }) {
  return (
    <MantineModal opened={opened} onClose={onClose} centered>
      {children}
    </MantineModal>
  );
}
