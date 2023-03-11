import { sbGetComponents, sbCreateComponent } from "@/lib/supabase";

export async function GET(req) {
  const components = await sbGetComponents();

  return Response.json(components);
}
