import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_API_KEY
);

export async function sbGetComponents() {
  let { data } = await supabase.from("components").select(`
    *,
    component_fields(
      field_types(*)
    )
  `);
  return data;
}

export async function sbGetComponent(id) {
  let { data, error } = await supabase
    .from("components")
    .select(
      `
    component_name,
    component_fields (
      field_types!inner(*)
    )
    
  `
    )
    .eq("id", id);

  if (error) {
    throw error;
  }

  return data;
}

export async function sbCreateComponent({ name }) {
  const { error } = await supabase
    .from("components")
    .insert({ component_name: name });

  if (error) {
    throw error;
  }
}

export async function sbDeleteComponent(id) {
  const { error } = await supabase.from("components").delete().eq("id", id);

  if (error) {
    throw error;
  }
}
