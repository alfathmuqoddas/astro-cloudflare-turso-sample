import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client/web";
import { relations } from "./schema/relations";
import { env } from "cloudflare:workers";

export interface Env {
  TURSO_URL: string;
  TURSO_TOKEN: string;
}

export function getDB() {
  const client = createClient({
    url: (env as any).TURSO_URL,
    authToken: (env as any).TURSO_TOKEN,
  });

  return drizzle({
    client,
    relations,
  });
}

export type Database = ReturnType<typeof getDB>;
