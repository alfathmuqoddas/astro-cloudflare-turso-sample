import * as dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

dotenv.config();
dotenv.config({ path: ".dev.vars", override: true });

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "turso",
  dbCredentials: {
    url: process.env.TURSO_URL || "",
    authToken: process.env.TURSO_TOKEN || "",
  },
});
