import { sbCreateComponent } from "@/lib/supabase";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  console.log(id);
  return Response.json("hej");
}

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
    if (e.code === "23505") {
      return new Response(
        JSON.stringify({
          code: 23505,
          message: "A component with this name already exists.",
        }),
        {
          status: 400,
        }
      );
    }
    return new Response(JSON.stringify(e), { status: 500 });
  }
  return new Response();
}

export async function DELETE(req) {
  return new Response();
}