import { getDB } from "@/db";
import { type APIRoute } from "astro";

export const GET: APIRoute = async () => {
  try {
    const db = getDB();
    const users = await db.query.usersTable.findMany({
      with: {
        posts: {
          columns: { title: true, content: true },
          with: {
            comments: {
              columns: { content: true },
            },
          },
        },
      },
    });

    return new Response(JSON.stringify(users), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
