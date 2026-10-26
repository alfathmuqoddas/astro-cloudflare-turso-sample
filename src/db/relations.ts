import { defineRelations } from "drizzle-orm";
import { usersTable, postsTable, commentsTable } from "./schema";

export const relations: any = defineRelations(
  { usersTable, postsTable, commentsTable },
  (r) => ({
    usersTable: {
      posts: r.many.postsTable(),
      comments: r.many.commentsTable(),
    },
    postsTable: {
      author: r.one.usersTable({
        from: r.postsTable.userId,
        to: r.usersTable.id,
      }),
      comments: r.many.commentsTable(),
    },
    commentsTable: {
      post: r.one.postsTable({
        from: r.commentsTable.postId,
        to: r.postsTable.id,
      }),
      author: r.one.usersTable({
        from: r.commentsTable.userId,
        to: r.usersTable.id,
      }),
    },
  }),
);
