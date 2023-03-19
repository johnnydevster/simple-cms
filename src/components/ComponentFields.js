import React, { useCallback, useEffect, useState } from "react";
import update from "immutability-helper";
import ComponentField from "./ComponentField";

export default function ComponentFields({ fields }) {
  const [fieldOrder, setFieldOrder] = useState();

  useEffect(() => {
    console.log("Fields changed");
    console.log(fields);
    setFieldOrder(fields);
  }, []);

  const moveField = useCallback((dragIndex, hoverIndex) => {
    setFieldOrder((prevFields) =>
      update(prevFields, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevFields[dragIndex]],
        ],
      })
    );
  }, []);

  const renderField = useCallback((field, index) => {
    return (
      <ComponentField
        key={field.id}
        id={field.id}
        index={index}
        moveCard={moveField}
        field={field}
      />
    );
  }, []);

  return (
    <div className="mt-4">
      <h3 className="font-semibold">Fields</h3>
      {fieldOrder?.map((field, i) => renderField(field, i))}
    </div>
  );
}
