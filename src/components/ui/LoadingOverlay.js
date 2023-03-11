import { LoadingOverlay as MantineLoadingOverlay } from "@mantine/core";

export default function LoadingOverlay({ visible }) {
  return (
    <MantineLoadingOverlay
      visible={visible}
      loaderProps={{ color: "violet" }}
    />
  );
}
