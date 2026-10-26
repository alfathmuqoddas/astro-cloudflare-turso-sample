import { defineRelations } from "drizzle-orm";
import { usersTable } from "./users";
import { postsTable } from "./posts";

export const relations: any = defineRelations(
  { usersTable, postsTable },
  (r) => ({
    usersTable: {
      posts: r.many.postsTable({
        from: r.usersTable.id,
        to: r.postsTable.userId,
      }),
    },
    postsTable: {
      author: r.one.usersTable({
        from: r.postsTable.userId,
        to: r.usersTable.id,
      }),
    },
  }),
);
