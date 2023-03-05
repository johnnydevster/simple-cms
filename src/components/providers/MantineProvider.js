"use client";

import { MantineProvider as Mantine } from "@mantine/core";

export default function MantineProvider({ children }) {
  return <Mantine>{children}</Mantine>;
}
