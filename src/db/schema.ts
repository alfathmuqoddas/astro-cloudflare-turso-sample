import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const postsTable = sqliteTable("posts_test", {
  id: integer().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  content: text(),
  userId: integer()
    .notNull()
    .references(() => usersTable.id),
});

export const usersTable = sqliteTable("users_test", {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  email: text().notNull().unique(),
});

export const commentsTable = sqliteTable("comments_test", {
  id: integer().primaryKey({ autoIncrement: true }),
  content: text().notNull(),
  postId: integer()
    .notNull()
    .references(() => postsTable.id),
});
