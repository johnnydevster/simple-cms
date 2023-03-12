import { sbGetComponents } from "@/lib/supabase";
import { formatComponentData } from "@/utils/formatComponentData";

export async function GET(req) {
  try {
    const data = await sbGetComponents();
    const formattedData = formatComponentData(data);
    console.log(formattedData);
    return Response.json(formattedData);
  } catch (e) {
    console.error(`Failed to get components in 'sbGetComponents'`);
    console.error(e);
    return new Response(JSON.stringify(e), { status: 500 });
  }
}
