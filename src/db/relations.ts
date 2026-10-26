import { defineRelations } from "drizzle-orm";
import { usersTable, postsTable, commentsTable } from "./schema";

export const relations: any = defineRelations(
  { usersTable, postsTable, commentsTable },
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
    commentsTable: {
      post: r.one.postsTable({
        from: r.commentsTable.postId,
        to: r.postsTable.id,
      }),
    },
  }),
);
