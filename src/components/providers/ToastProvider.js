"use client";

import dynamic from "next/dynamic";

const DynamicToaster = dynamic(() =>
  import("react-hot-toast").then((mod) => mod.Toaster)
);

export default function ToasterProvider() {
  return <DynamicToaster position="bottom-center" />;
}
