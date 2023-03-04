import { sbCreateComponent } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  try {
    await sbCreateComponent(body);
  } catch (e) {
    console.error(`Failed to create component: '${component}', error:  `, e);
    return new Response(JSON.stringify(e), { status: 500 });
  }
  return new Response();
}
