import { sbGetComponents } from "@/lib/supabase";

export async function GET(request) {
  const components = await sbGetComponents();

  return Response.json(components);
}
