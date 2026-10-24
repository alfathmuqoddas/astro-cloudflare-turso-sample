import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { usersTable } from "./users";

export const postsTable = sqliteTable("posts_test", {
  id: integer().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  content: text(),
  userId: integer()
    .notNull()
    .references(() => usersTable.id),
});
