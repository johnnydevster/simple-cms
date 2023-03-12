"use client";

import useGetComponents from "@/hooks/useGetComponents";

export default function Components({
  selectedComponent,
  setSelectedComponent,
}) {
  const componentsQuery = useGetComponents();

  if (componentsQuery.isLoading) {
    return <div>Loading ...</div>;
  }

  if (componentsQuery.isError) {
    return <div>Couldn't get components</div>;
  }

  return (
    <ul className="font-semibold bg-white rounded border">
      {componentsQuery.data?.map((component) => (
        <li
          key={component.id}
          onClick={() => setSelectedComponent(component)}
          className={`${
            selectedComponent?.id == component.id
              ? "bg-gradient-to-r from-primary-800 to-primary-700 text-white"
              : " hover:text-primary-600"
          } cursor-pointer p-4 first:rounded-t last:rounded-b`}
        >
          {component.name}
        </li>
      ))}
    </ul>
  );
}
