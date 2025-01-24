import { log } from "console";
import db from "../../../db";
import { advocates } from "../../../db/schema";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const limit = parseInt(searchParams.get("limit")) || 50;
  const offset = parseInt(searchParams.get("offset")) || 0;
  const filter = searchParams.get("name") || "";

  log(
    `Fetching advocates with limit ${limit}, offset ${offset}, and filter ${filter}`
  );

  try {
    const data = await db
      .select()
      .from(advocates)
      // .where(filter ? `name LIKE '%${filter}%'` : {})
      .limit(limit)
      .offset(offset);

    log(`Fetched ${data.length} advocates`);

    return new Response(JSON.stringify({ data, limit, offset }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
