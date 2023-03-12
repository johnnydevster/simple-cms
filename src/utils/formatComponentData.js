export function formatComponentData(data) {
  const formattedData = data.map((component) => {
    const formattedComponent = {
      id: component.id,
      name: component.component_name,
      fields: component?.component_fields?.map((field) => {
        const formattedField = {
          id: field.field_types.id,
          name: field.field_types.field_name,
          description: field.field_types.field_description,
        };
        return formattedField;
      }),
    };
    return formattedComponent;
  });
  return formattedData;
}
