import { sbCreateComponent } from "@/lib/supabase";

export async function POST(req) {
  const body = await req.json();

  if (!body.name) {
    return new Response("Missing name field from request.", { status: 400 });
  }

  try {
    await sbCreateComponent(body);
  } catch (e) {
    console.error(`Failed to create component in 'sbCreateComponent': `, body);
    console.error(e);
    return new Response(JSON.stringify(e), { status: 500 });
  }
  return new Response();
}
