import { sbGetComponents } from "@/lib/supabase";

export async function GET(request) {
  const components = await sbGetComponents();
  console.log(components);
  return new Response("Hello, Next.js!");
}
