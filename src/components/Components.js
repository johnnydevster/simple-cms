"use client";

import useGetComponents from "@/hooks/useGetComponents";
import { useState } from "react";

export default function Components({
  selectedComponent,
  setSelectedComponent,
}) {
  const { data, isLoading, isError } = useGetComponents();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>Couldn't get components</div>;
  }

  return (
    <ul className="font-semibold bg-white rounded border">
      {data?.map((component) => (
        <li
          key={component.id}
          onClick={() => setSelectedComponent(component.id)}
          className={`${
            selectedComponent == component.id
              ? "bg-gradient-to-r from-primary-800 to-primary-700 text-white"
              : "hover:bg-gray-50"
          } cursor-pointer p-4 first:rounded-t last:rounded-b`}
        >
          {component.name}
        </li>
      ))}
    </ul>
  );
}
