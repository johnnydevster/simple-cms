import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_API_KEY
);

export async function sbGetComponents() {
  let { data } = await supabase.from("components").select();
  return data;
}

export async function sbGetComponent(id) {
  let { data } = await supabase.from("components").select().eq("id", id);
  return data;
}

export async function sbCreateComponent({ name }) {
  const { error } = await supabase.from("components").insert({ name });

  if (error) {
    throw error;
  }
}
