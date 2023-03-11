import { LoadingOverlay as MantineLoadingOverlay } from "@mantine/core";

export default function LoadingOverlay({ visible }) {
  return (
    <MantineLoadingOverlay
      visible={visible}
      overlayOpacity={0.2}
      loaderProps={{ color: "violet" }}
    />
  );
}
