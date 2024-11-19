import dbConnect from "@/lib/dbConnection";
import getDb from "@/lib/helpers";

export async function POST(req: Request) {
  const body = await req.json();
  const dbName = "Shortener";
  await dbConnect(dbName);

  const db = getDb();
  const result = await db.collection("Urls").insertOne({
    url: body.url,
    shortUrl: body.shorturl,
  });

  return new Response(JSON.stringify(result));
}
